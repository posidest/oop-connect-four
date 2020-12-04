import { Game } from './game.js'

game = undefined;

window.addEventListener("DOMContentLoaded", e => {

    const player1Name = document.getElementById("player-1-name");
    const player2Name = document.getElementById("player-2-name")
    player2Name.addEventListener("keyup", e => {
        const newGame = document.getElementById("new-game");
        if (player1Name.value !== "" && player2Name.value !== "") {
            newGame.disabled = false;
        }
    })

})