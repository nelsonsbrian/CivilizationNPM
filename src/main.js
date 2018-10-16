import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Russia, China, Egypt } from "../src/player-logic";
import { Game } from './game-logic';


let currentGame;
let player1;
let player2;
let player3;

function updatePlayerStats() {
    $("#yourHealth").text(currentGame.mainPlayer.health);
    $("#yourScience").text(currentGame.mainPlayer.science);
    $("#yourEconomy").text(currentGame.mainPlayer.economy);
    $("#yourPopulation").text(currentGame.mainPlayer.population);
    $("#yourFood").text(currentGame.mainPlayer.foodLevel);
    $("#yourWorkers").text();
    $("#yourWarriors").text();
    $("#yourNewUnits").text(currentGame.mainPlayer.availableUnitAssign);

}

$(document).ready(function () {
    $("#civSelect").submit(function (event) {
        event.preventDefault();
        let mainPlayerName = $("#civs option:selected").val();
        
        player1 = new Russia();
        player2 = new China();
        player3 = new Egypt();
        let playerDict = {
            "Russia": player1,
            "China": player2,
            "Egypt": player3
        };
       
        playerDict[mainPlayerName].setMainPlayer();
       
        currentGame = new Game(player1, player2, player3);
        
       
        console.log(currentGame.mainPlayer);
        $("#yourCiv").text(mainPlayerName);
        $("#turn").text(currentGame.turn);
        updatePlayerStats();
        $('#civDiv').hide();
    });
});
