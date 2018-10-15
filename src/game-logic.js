import { getHeapStatistics } from "v8";

export class Game {
    constructor(player1, player2, player3) //objects
    {

        this.status = true; //True = game is on-going
        this.turn = 0;
        this.turnStatus = true; //True = player's turn, false = AI's turn;
        this.playersArr = [player1, player2, player3];
        this.mainPlayer =
            this.playersArr.forEach(function (player) {
                if (player.AI == false) {
                    return player;
                }
            });
    }
    isGameOver() {
        //check if ANY player won

        this.playersArr.forEach(function (player) {
            if (player.science == 100 || player.millitary == 100 || player.culture == 100) {
                this.status = false;
            }
        });

        //check if main player just lost
        if (this.mainPlayer.totalUnit == 0) {
            this.status = false;
        }
    }
}