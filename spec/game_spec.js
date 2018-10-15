import { Game } from "../src/game-logic";
import { Russia, China, Egypt } from "../src/player-logic";

describe('Game', function () {

    let player1 = new Russia();
    let player2 = new China();
    let player3 = new Egypt();
    player1.setMainPlayer();
    let newGame = new Game(player1, player2, player3);

    it('should return game status to be true at the start of the game', function () {


        newGame.isGameOver();
        expect(newGame.status).toEqual(true);
    });

});
