const Strategy = require('./strategy').Strategy;
const Point = require('./point').Point
const Frame = require('./frame').Frame

class Simulator {
    run(bank, points, strategies, minFrameLength, maxFrameLength){
        let lastPatternEnd = 0;
        
        // walk forward through the points
        for (let i=minFrameLength; i<points.length; i++){
            
            let start = Math.max(0, i - maxFrameLength, lastPatternEnd);
            let end = i;

            // create a frame as wide as the maxFrameLength ending at "now"
            let frame = new Frame(points.slice(start, end));

            // Find the first strategy whose pattern matches.
            // TODO: "first" is arbitrary now. Ideally patterns would have
            // a weight and detected magnitude we could keep them sorted on.
            strategies.forEach(strategy => {
                let isDetected = strategy.pattern(frame);
                if (isDetected){
                    strategy.bankAction(bank, frame.last());
                    // This prevents more than one strategy running per frame.
                    // TODO: consider this - not necessarily the behavior we want.
                    lastPatternEnd = i;                    
                }
            })
        }
    }
}
module.exports.Simulator = Simulator;