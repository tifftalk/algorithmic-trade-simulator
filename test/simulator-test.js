'use strict'

const expect = require('chai').expect;
const Frame = require('../frame').Frame;
const Point = require('../point').Point;
const Pattern = require('../pattern').Pattern;
const Bank = require('../bank').Bank;
const Strategy = require('../strategy').Strategy;
const Simulator = require('../simulator').Simulator;
const fs = require("fs");

describe('simulator', function(){
  it('should net profits', function(){
    let json = JSON.parse(fs.readFileSync('./sample-points-local-max.json'));
    let points = json.map(p => new Point(p.time, p.price));
    let myBank = new Bank(10, 1000);
    let strategies = [];

    let sellOne = (bank, price) => {
      bank.sell(1, price)
    }

    let buyOne = (bank, price) => {
      bank.buy(1, price)
    }

    let fallingFromLocalMaxPattern = (frame) => {
      // there is a local max 10% higher than the frame average
      // the current point has fallen between 3% - 5%
      const high = frame.highest();
      const avg = frame.average();
      const last = frame.last();
      const highToAvg = high / avg;

      return (highToAvg > 1.1) && ( last / high < 0.97 && last / high > 0.95)
    }
    strategies.push(new Strategy(fallingFromLocalMaxPattern, sellOne));

    let risingFromLocalMinPattern = (frame) => {
      // there is a local min 10% lower than the frame average
      // the current point has risen between 3% - 5%
      const low = frame.lowest();
      const avg = frame.average();
      const last = frame.last();
      return (low / avg < 0.9) && ( last / low > 1.03 && last / low < 1.05);
    }
    strategies.push(new Strategy(risingFromLocalMinPattern, buyOne));
    
    let simulator = new Simulator()
    simulator.run(myBank, points, strategies, 3, 10);
    
    expect(myBank.cashCents).to.equal(1610);
    expect(myBank.assetCount).to.equal(9); 
    console.log(myBank)   
  });
})
