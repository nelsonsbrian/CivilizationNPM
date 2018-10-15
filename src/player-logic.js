import { Worker, Warrior } from "./unit-logic";

export class Player {
    constructor() {
        this.health = 700;
        this.economy = 500;
        this.wonders = [];
        this.population = 1;
        this.foodLevel = 0; //depending on location this initial value will be different
        this.science = 0;
        this.war = []; //A list of civs
        this.AI = true;
        this.dead = false;
        this.workerList = [];
        this.warriorList = [];
        this.availableUnitAssign = 0;
        this.units = [];
    }

    declareWar(targetPlayers) //could declare war on multiple civs at once
    {
        targetPlayers.forEach(function (target) {
            if (!this.war.includes(target)) {
                this.war.push(target);
            }
        });
    }

    makePeace(targetPlayers) { //assumming input targets are actually at war
        tagertPlayers.forEach(function (target) {
            let index = war.indexOf(target);
            war.splice(index, 1);
        });
    }

    grow() {
        const growInterval = setInterval(() => {

            this.availableUnitAssign++;
        }, 10000)
        //should allow the user to assign profession to new citizen
    }

    decrementingFood() {
        const decreaseFood = setInterval(() => {
            this.foodLevel -= this.population * 0.2; //arbitrary
        }
            , 10000)
    }

    createUnit(index) {
        let newUnit;
        if (index === 1) {
            newUnit = new Worker();
            this.workerList.push(newUnit);
        } else if (index === 2) {
            newUnit = new Warrior();
            this.warriorsList.push(newUnit);
        }
        this.units.push(newUnit);
    }

    setMainPlayer() {
        this.AI = false;
    }

    assignProfession(index)
    {
        if (index === 1) {
            this.worker++;
            this.availableUnitAssign--;
            this.population++;
        } else if (index === 2) {
            this.warrior++;
            this.availableUnitAssign -= 2;
            this.population += 2;
        }
    }

    attackAll(targetPlayer) {
        let attackTotal = 0;
        this.warriorList.forEach(function(unit) {
            if (unit.action != 0) {
                attackTotal+= unit.attack;
                unit.action = 1;
            }
        });
        targetPlayer.takeDamage(attackTotal);
    }

    takeDamage(amount) {
        this.health -= amount;
    }

    civUpgrade()
    {

    }
}

export class Egypt extends Player {
    constructor() {
        super();
        this.civId = 0;
        this.civName = "Egypt";
        this.leaderName = "Cleopatra";
        this.millitary = 10; //weak
        this.culture = 30; //strong
        this.location = 2; //grassland
    }
}

export class Russia extends Player {
    constructor() {
        super();
        this.civId = 1;
        this.civName = "Russia";
        this.leaderName = "Putin";
        this.millitary = 30;
        this.culture = 10;
        this.location = 1; //island with marsh
    }
}

export class China extends Player {
    constructor() {
        super();
        this.civId = 2;
        this.civName = "China";
        this.leaderName = "Mao";
        this.millitary = 20;
        this.culture = 20;
        this.location = 0; //mountains
    }
} 