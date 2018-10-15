export class Player {
    constructor() {
        this.economy = 500;
        this.wonders = [];
        this.population = 1;
        this.foodLevel = 0; //depending on location this initial value will be different
        this.science = 0;
        this.war = []; //A list of civs
        this.AI = true;
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
        tagertPlayers.forEach(function (target)
        {
            let index = war.indexOf(target);
            war.splice(index, 1);
        });
    }
    grow()
    {
        const growInterval = setInterval(() =>{
            this.population++;
        },10000)
    }
    decrementingFood()
    {
        const decreaseFood = setInterval(() =>{
            this.foodLevel -= this.population*0.2; //arbitrary
        }
        ,10000)
    }
    setMainPlayer()
    {
        this.AI = false;
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