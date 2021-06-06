using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace ChessMatchmaking.Entities
{
    public class Client
    {
        public string Name { get; private set; }
        public Status Status { get; private set; }
        public Client Enemy { get; private set; }

        // SignalR connection id
        private readonly string _connectionId;
        private readonly IClientProxy _client;

        public Client(IClientProxy client, string connectionId)
        {
            _client = client;
            _connectionId = connectionId;
            Status = Status.Logout;
        }

        /// <summary>
        /// Called when user is logged in. Does validation and status changing
        /// </summary>
        /// <param name="name">Nickname</param>
        /// <exception cref="Exception"></exception>
        public async Task Login(string name)
        {
            if (Status != Status.Logout)
                throw new Exception("User already logged in");

            if (string.IsNullOrEmpty(name))
                throw new Exception("Name can not be empty");
            
            Status = Status.Logged;
            Name = name;

            await _client.SendAsync("UserLogged");
        }

        /// <summary>
        /// Called when search started. Does some validation and status changing
        /// </summary>
        /// <exception cref="Exception"></exception>
        public void Search()
        {
            if (Status == Status.Logout)
                throw new Exception("User is logout");

            if (Status == Status.Fighting)
                throw new Exception("Already fighting");
            
            Status = Status.Searching;
        }

        /// <summary>
        /// Called when game has just started. Does some initial setup and status change
        /// </summary>
        /// <param name="enemy"></param>
        /// <param name="side"></param>
        /// <exception cref="Exception"></exception>
        public async Task StartGame(Client enemy, string side)
        {
            if (Status == Status.Logout)
                throw new Exception("User is logout");

            if (Status == Status.Fighting)
                throw new Exception("Already fighting");

            Enemy = enemy ?? throw new NullReferenceException("Enemy can't be null!");

            Status = Status.Fighting;

            await _client.SendAsync("GameStarted", side);
        }

        /// <summary>
        /// Called when client does move himself. Send move to enemy
        /// </summary>
        /// <param name="from">Origin position</param>
        /// <param name="to">Destination</param>
        public async Task MakeMove(string from, string to)
        {
            if (Status != Status.Fighting)
                throw new Exception("There is no fight");

            if (Enemy == null)
                throw new Exception("Client has no enemy");
            
            await Enemy.GetMove(from, to);
        }

        /// <summary>
        /// Called when client get enemy's move. Does enemy's move on the board
        /// </summary>
        /// <param name="from">Origin position</param>
        /// <param name="to">Destination</param>
        public async Task GetMove(string from, string to)
        {
            if (Status != Status.Fighting)
                throw new Exception("There is no fight");

            await _client.SendAsync("ReceiveMove", from, to);
        }
    }
}