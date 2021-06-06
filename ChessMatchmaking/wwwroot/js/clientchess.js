"use strict";

var board = null;
var game = new Chess();
var $status = $('#status');
var $fen = $('#fen');
var $pgn = $('#pgn');
var currentSide = "no";

var config = {
    orientation: "white",
    draggable: false,
    position: 'start'
};

$pgn[0].hidden = true;

board = Chessboard('board', config);

document.getElementById("searchButton").disabled = true;

var connection = new signalR.HubConnectionBuilder().withUrl("/chessHub").build();

connection.start().then(function () {
    //On Connection started
    connection.invoke("Login", "Федя пидор");
}).catch(function (err) {
    return console.error(err.toString());
});

connection.on("UserLogged", function (user) {
    //On user logged in
    document.getElementById("searchButton").disabled = false;
});

document.getElementById("searchButton").addEventListener("click", function (event) {
    document.getElementById("searchButton").disabled = true;
    
    connection.invoke("Search").catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});

connection.on("GameStarted", function (side){
    $("#searchButton")[0].hidden = true
    $pgn[0].hidden = false;
    
    var config = {
        orientation: side,
        draggable: true,
        position: 'start',
        onDragStart: onDragStart,
        onDrop: onDrop,
        onSnapEnd: onSnapEnd
    };

    currentSide = config.orientation;
    board = Chessboard('board', config);

    updateStatus();
    
    
});

function onDragStart (source, piece, position, orientation) {
    // do not pick up pieces if the game is over
    if (game.game_over()) return false;

    // only pick up pieces for the side to move
    
    
    if ((game.turn() !== currentSide.charAt(0))) return false;
    
    if ((game.turn() === 'w' && piece.search(/^b/) !== -1) ||
        (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
        return false;
    }
}

function onDrop (source, target) {
    // see if the move is legal
    var move = game.move({
        from: source,
        to: target,
        promotion: 'q' // NOTE: always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return 'snapback';
    
    connection.invoke("MakeMove", source, target);

    // to move to response on server validation updateStatus();
    updateStatus();
}

connection.on("ReceiveMove", function(from, to) {
    // see if the move is legal
    var move = game.move({
        from: from,
        to: to,
        promotion: 'q' // NOTE: always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return 'snapback';
    
    board.move(from + "-" + to);

    updateStatus();
});

// update the board position after the piece snap
// for castling, en passant, pawn promotion
function onSnapEnd () {
    board.position(game.fen());
}

function updateStatus () {
    var status = '';

    var moveColor = 'White';
    if (game.turn() === 'b') {
        moveColor = 'Black';
    }

    // checkmate?
    if (game.in_checkmate()) {
        status = 'Game over, ' + moveColor + ' is in checkmate.';
    }

    // draw?
    else if (game.in_draw()) {
        status = 'Game over, drawn position';
    }

    // game still on
    else {
        status = moveColor + ' to move';

        // check?
        if (game.in_check()) {
            status += ', ' + moveColor + ' is in check';
        }
    }

    $status.html(status);
    $fen.html(game.fen());
    $pgn.html(game.pgn({ max_width: 5, newline_char: '<br />' }));

    
}