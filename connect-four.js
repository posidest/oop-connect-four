import { Game } from './modules/game.js'

game = undefined;

window.addEventListener("DOMContentLoaded", e => {
    const newGame = document.getElementById("new-game");
    const player1Name = document.getElementById("player-1-name");
    const player2Name = document.getElementById("player-2-name")
    player2Name.addEventListener("keyup", e => {
        if (player1Name.value !== "" && player2Name.value !== "") {
            newGame.disabled = false;
        }
    })
    newGame.addEventListener("click", e => {
        game = new Game(player1Name.value, player2Name.value);
        player1Name.value = "";
        player2Name.value = "";
        newGame.disabled = true;
        //updateUI();

    })

})