using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ChessMatchmaking.Entities;
using Microsoft.AspNetCore.SignalR;
using Serilog;

namespace ChessMatchmaking.Hubs
{
    public class ChessHub : Hub
    {
        private const string CurrentClientKey = "Current";
        
        private static readonly List<Client> Idle = new List<Client>();
        private static readonly List<Client> Searching = new List<Client>();
        private static readonly List<Client> Fighting = new List<Client>();

        private static readonly ILogger Logger = new LoggerConfiguration()
            .MinimumLevel.Debug()
            .WriteTo.Console()
            .WriteTo.File("logs/*.log")
            .CreateLogger();

        private Client Current => (Client)Context.Items[CurrentClientKey];

        public override async Task OnConnectedAsync()
        {
            var client = new Client(Clients.Caller, Context.ConnectionId);

            if (Context.Items.ContainsKey(CurrentClientKey) == false)
                Context.Items.Add(CurrentClientKey, client);
            
            Idle.Add(client);
            
            Logger.Debug("User connected");
        }

        public override async Task OnDisconnectedAsync(Exception? exception)
        {
            var id = Context.ConnectionId;

            if (Current.Status == Status.Logged || Current.Status == Status.Logout)
                Idle.Remove(Current);

            if (Current.Status == Status.Searching)
                Searching.Remove(Current);

            if (Current.Status == Status.Fighting)
            {
                await Current.Enemy.OpponentDrawn();
                Fighting.Remove(Current);
            }

            Logger.Debug("User disconnected");
        }

        public async Task GetStatus()
        {
            await Clients.Caller.SendAsync("ReceiveStatus", Current.Status.ToString());
        }

        public async Task Login(string name)
        {
            Logger.Debug($"Login requested for {name}");

            await Current.Login(name);

            Logger.Debug("Added user to idle list");
        }
        
        public async Task MakeMove(string from, string to)
        {
            try
            {
                await Current.MakeMove(from, to);
            }
            catch (Exception e)
            {
                Logger.Error("Client tried to send move, but error occurred: " + e.Message);
            }
        }

        public async Task Checkmate(string colorMated)
        {
            Logger.Debug($"The game just ended. {colorMated} was checkmated");
        }

        public async Task InDraw()
        {
            Logger.Debug("The game just ended with draw.");
        }

        public async Task Search()
        {
            Current.Search();

            Idle.Remove(Current);
            Searching.Add(Current);
            
            //TODO Search Service

            Client enemy = null;

            await Task.Run(async () =>
            {
                int maxCount = 20;

                for (int i = 0; i < maxCount; i++)
                {
                    if (Current.Status != Status.Searching) return;
                    
                    if (Searching.Count > 1)
                    {
                        lock (Searching)
                        {
                            Searching.Remove(Current);

                            enemy = Searching[0];

                            Searching.Remove(enemy);

                            Fighting.Add(Current);
                            Fighting.Add(enemy);
                        }
                        
                        await Current.StartGame(enemy, "white");
                        await enemy.StartGame(Current, "black");
                    }
                    
                    await Task.Delay(1000);
                }
            });
        }
    }
}