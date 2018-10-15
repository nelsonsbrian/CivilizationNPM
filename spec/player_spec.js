import { Player } from "../src/player-logic";
import { Russia, China, Egypt } from "../src/player-logic";

describe('Player', function () {
    let player1;
    let player2;
    let player3;
    beforeEach(function () {
        jasmine.clock().install();
        player1 = new Russia();
        player2 = new China();
        player3 = new Egypt();
    });
    afterEach(function () {
        jasmine.clock().uninstall();
    });
    it('should add the targeted players to the war list', function () {
        player1.declareWar([player2]);
        expect(player1.war.length).toBe(1);
        player1.declareWar([player3]);
        expect(player1.war).toContain(player2);
        expect(player1.war).toContain(player3);
    })

    it('should remove the targetted players from the war list', function () {
        player2.declareWar([player1, player3]);
        expect(player2.war).toContain(player3);
        expect(player2.war).toContain(player1);
        player2.makePeace([player3]);
        expect(player2.war).toContain(player1);
        expect(player2.war).not.toContain(player3);
    })
    it('should grow the available units to assign field', function () {
        expect(player1.availableUnitAssign).toEqual(0);
        player1.grow();
        jasmine.clock().tick(10001);
        expect(player1.availableUnitAssign).toEqual(1);
        jasmine.clock().tick(30001);
        expect(player1.availableUnitAssign).toEqual(4);
    })
    it('should decriment food based on population', function () {
        player1.foodLevel = 500;
        expect(player1.foodLevel).toEqual(500);
        player1.population = 40;
        let playerPop = player1.population;
        let playerFood = player1.foodLevel;
        player1.decrementingFood();
        jasmine.clock().tick(10001);
        expect(player1.foodLevel).toEqual(playerFood - playerPop * .2);
    })
    it('should create the correct unit and add it to the correct count list', function () {
        player1.createUnit(1);
        expect(player1.workerList.length).toBe(1);
        player1.createUnit(1);
        expect(player1.workerList.length).toBe(2);
        player1.createUnit(2);
        expect(player1.warriorsList.length).toBe(1);
    })   
    it('should properly remove the availavleUnitAssign attribute when createUnit is called', function () {
        player1.grow();
        player1.population = 10;
        jasmine.clock().tick(100001);
        expect(player1.availableUnitAssign).toBe(10);
        player1.createUnit(1);
        player1.createUnit(1);
        player1.createUnit(2);
        player1.createUnit(2);
        player1.createUnit(1);                        
        expect(player1.availableUnitAssign).toBe(3);
        expect(player1.units.length).toBe(5);
        expect(player1.workerList.length).toBe(3);
        expect(player1.warriorsList.length).toBe(2);
        expect(player1.population).toEqual(17);       
    })
       
});