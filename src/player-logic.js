export class Player {
    constructor() {
        this.economy = 500;
        this.wonders = [];
        this.population = 1;
        this.food = 0; //depending on location this initial value will be different
        this.science = 0;
    }
}

export class Egypt extends Player {
    constructor() {
        super();
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
        this.civName = "China";
        this.leaderName = "Mao";
        this.millitary = 20;
        this.culture = 20;
        this.location = 0; //mountains
    }
} 