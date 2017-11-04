'use strict'

const expect = require('chai').expect;
const Frame = require('../frame').Frame;
const Point = require('../point').Point;

describe('frame', function(){
  it('should get highest and lowest', function(){
    let t1 = new Date("2017-03-25T12:00:00Z");
    let t2 = new Date("2017-03-25T12:05:00Z");
    
    let point1 = new Point(t1, 5000);
    let point2 = new Point(t2, 5050);

    let frame = new Frame([point1, point2]);

    expect(frame.highest()).to.equal(point2.price);
    expect(frame.lowest()).to.equal(point1.price);
  });
})
