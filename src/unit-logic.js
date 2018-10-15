export class Unit {
    constructor(player) {
        this.playerId = player;
        this.action = 0;
    }
    
    canTakeAction() {
        return (this.action === 0) ? true: false;
    }

    attack() {

    }

    takeDamage() {

    }
}

export class Warrior extends Unit {
    constructor() {
        super();
        this.name = "Warrior";
        this.health = 150;
        this.attack = 7;
    }
}

export class Archer extends Unit {
    constructor() {
        super();
        this.name = "Archer";
        this.health = 70;
        this.attack = 9;
    }
}

export class Worker extends Unit {
    constructor() {
        super();
        this.name = "Worker";
        this.health = 50;
        this.attack = 2;
    }

    forage(player) {
        this.action = 1;
        const getFood = setTimeout((player) => {
            player.food += 30;
            this.action = 0;
        }, 10000);       
    }

    researchScience(player) {
        this.action = 1;
        const getScience = setTimeout((player) => {
            if (Math.random() > .50) {
                player.science++;
                this.action = 0;
            }
        }, 25000);
    }
    gainCulture(player) {
        this.action = 1;
        const getScience = setTimeout((player) => {
            if (Math.random() > .60) {
                player.culture++;
                this.action = 0;
            }
        }, 25000);
    }


}