'use strict'

class Pattern {
    constructor(detector){
        this.detector = detector;
    }
    detect(frame){
        return this.detector(frame);
    }
}
module.exports.Pattern = Pattern;