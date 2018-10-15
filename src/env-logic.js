export class Environment {
    constructor(){
    }
}

export class GrassLand extends Environment{
    constructor()
    {
        super();
        this.location = 2;
        this.food = 8;
        this.economy = 5;
        this.culture = 3;
        this.millitary = 1;
        this.science = 2;
    }
}

export class Mountain extends Environment{
    constructor()
    {
        super();
        this.location = 0;
        this.food = 2;
        this.economy = 1;
        this.culture = 1;
        this.millitary = 5;
        this.science = 7;
    }
}


export class Marsh extends Environment{
    constructor()
    {
        super();
        this.location = 2;
        this.food = 10;
        this.economy = 3;
        this.culture = 3;
        this.millitary = 1;
        this.science = 1;
    }
}