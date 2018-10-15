export class Game {
    constructor(player1, player2, player3) //objects
    {

        this.status = true; //True = game is on-going
        this.turn = 0;
        this.currentTurn = 0;
        this.currentPlayer;
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
        let remainingAI = 2;
        this.playersArr.forEach(function (player) {

            if (player === this.mainPlayer) {
                //check if main player just lost
                if (this.mainPlayer.population == 0) {
                    this.status = false;
                }
            } else if (player.science == 100 || player.millitary == 100 || player.culture == 100) {
                this.status = false;
            }

            if (player.population == 0) {
                remainingAI--;
                player.dead = true;
            }

            if (remainingAI === 0) {
                this.status = false;
            }
        });
    }

    endTurn()
    {
        isGameOver();
        if (this.status === true)
        {
            if (this.currentTurn === this.playersArr.length - 1) {
                this.currentTurn = 0;
            } else {
                this.currentTurn++;
            }
            this.currentPlayer = this.playersArr[this.currentTurn];
            this.turn++;

            if (this.currentPlayer.dead) {
                this.endTurn();
            } else if (this.currentPlayer.AI) {
                const AITurnTaking = setTimeout(() => {
                    //insert AI logic function call here
                    this.endTurn();
                } , 5000);
            }
        }
    }
}