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

function updatePlayerStats(player) {
    $("#yourHealth").text(player.health);
    $("#yourScience").text(player.science);
    $("#yourEconomy").text(player.economy);
    $("#yourPopulation").text(player.population);
    $("#yourFood").text(player.foodLevel);
    $("#yourWorkers").text(player.workerList.length);
    $("#yourWarriors").text(player.warriorsList.length);
    $("#yourNewUnits").text(player.availableUnitAssign);

}

function updateStatInterval() {
    const updateStats = setInterval(() => {
        for (let i = 0; i < currentGame.playersArr.length; i++) {
            updatePlayerStats(currentGame.playersArr[i]);
        }            
    }, 100);
}

function showNewUnits() {
    $("#yourAssign").text("");
    for(let i = 0; i < currentGame.mainPlayer.availableUnitAssign; i++) {
        $("#yourAssign").append('<div> + <button class="addWarrior" id="u'+i+'">Add Warrior</button> + <button class="addWorker" >Add Worker</button> + </div>');
        addWarrior();
        addWorker();        
    }
}

function addWarrior() {
    $('.addWarrior').last().click(function() {
        console.log("Warrior click");
        currentGame.mainPlayer.createUnit(2);
        showNewUnits();
    });
}

function addWorker() {
    $('.addWorker').last().click(function() {
        console.log("Worker click");
        currentGame.mainPlayer.createUnit(1);
        showNewUnits();
    });
}




// function showNewUnits() {
//     $("#yourAssign").text();
//     for(let i = 0; i < currentGame.mainPlayer.availableUnitAssign; i++) {
//         $(".yourAssign").append('<div> + <button class="addWarrior" id="u'+i+'">Add Warrior</button>');
//         addWarrior();
//         $(".yourAssign").append(' <button class="" >Add Worker</button> + </div>');
//         $(".addWorker").last().click(console.log("workingnow"));
//         addWorker();
//     }
// }


// function showNewUnits() {
//     $("#yourAssign").text();
//     let count = currentGame.mainPlayer.availableUnitAssign;
//     while (count >=0){
//         $("#yourAssign").append('<div> + <button class="addWarrior" >Add Warrior</button> + <button class="addWorker" >Add Worker</button> + </div>');
//         count--;
//     }
// }




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
         
        for (let i = 0; i < currentGame.playersArr.length; i++) {
            if (currentGame.playersArr[i] !== currentGame.mainPlayer) {
                $("#AI" + (i + 1)).text(currentGame.playersArr[i].civName);
            }
            currentGame.playersArr[i].grow(currentGame);
            currentGame.playersArr[i].decrementingFood(currentGame);            
            updatePlayerStats(currentGame.playersArr[i]);
        }
        updateStatInterval();

        $("#yourCiv").text(mainPlayerName);
        $("#turn").text(currentGame.turn);
        $('#civDiv').hide();
    });
    $("#endTurn").click(function(){
        console.log("clicked2");
        currentGame.endTurn();
        showNewUnits();
        updatePlayerStats(currentGame.mainPlayer);
    });    
});
