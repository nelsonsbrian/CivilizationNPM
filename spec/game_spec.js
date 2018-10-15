import { Game } from "./game-logic";
import { Russia, China, Egypt } from "../src/player-logic";

describe('Game', function() {
    let player1 = new Russia();
    let player2 = new China();
    let player3 = new Egypt();
    player1.setMainPlayer();
    let newGame = new Game(player1, player2, player3);
    let toWar = [player2, player3];
    
    it('should end game if the player is dead', function() {
        expect().includes(120.83);
    });
 
});
