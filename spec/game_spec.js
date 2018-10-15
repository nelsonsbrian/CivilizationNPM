import { Game } from "../src/game-logic";
import { Russia, China, Egypt } from "../src/player-logic";

describe('Game', function () {
    let newGame;
    beforeEach(function () {
        let player1 = new Russia();
        let player2 = new China();
        let player3 = new Egypt();
        player1.setMainPlayer();
        newGame = new Game(player1, player2, player3);
    });

    it('should return game status to be true at the start of the game', function () {
        newGame.isGameOver();
        expect(newGame.status).toEqual(true);
    });
    it('should return game status to be false if the main player is dead', function () {
        newGame.mainPlayer.population = 0;
        newGame.isGameOver();
        expect(newGame.status).toEqual(false);
    });
    it('should return game status to be false if both of the AIs are dead', function () {
        newGame.playersArr.forEach(function (player) {
            if (player != newGame.mainPlayer) {
                player.population = 0;
            }
        });
        newGame.isGameOver();
        expect(newGame.status).toBe(false);
    });

    it('should return game status to be false if the main player reaches 100 points in science', function () {
        newGame.mainPlayer.science = 100;
        newGame.isGameOver();
        expect(newGame.status).toBe(false);
    });
    it('should return game status to be false if player2 reaches 100 points in science', function () {
        newGame.playersArr[1].science = 100;
        newGame.isGameOver();
        expect(newGame.status).toBe(false);
    });
    it('should return game status to be false any player3 reaches 100 points in science', function () {
        newGame.playersArr[2].science = 100;
        newGame.isGameOver();
        expect(newGame.status).toBe(false);
    });
    it('should return game status to be false any player reaches 100 points in culture', function () {
        newGame.playersArr[2].culture = 100;
        newGame.isGameOver();
        expect(newGame.status).toBe(false);
    });
    it('should return game status to be false any player reaches 100 points in millitary', function () {
        newGame.playersArr[0].millitary = 100;
        newGame.isGameOver();
        expect(newGame.status).toBe(false);
    });
    it('should return the corresponding player object given the id', function () {
        expect(newGame.getPlayer(1).civName).toEqual(newGame.playersArr[1].civName);
    })
});
