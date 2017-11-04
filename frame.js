class Frame {
    constructor(points){
        this.points = points;
        this.length = points.length;
    }
    highest(){
        return this.points.reduce((a,b) => {
            return Math.max(a, b.price);
        }, 0)
    }
    lowest(){
        return this.points.reduce((a,b) => {
            return Math.min(a, b.price);
        }, Number.POSITIVE_INFINITY)
    }
    average(){
        return this.points.reduce((a,b) => {
            return a + b.price;
        }, 0) / this.points.length;
    }
    last(){
        return this.points[this.points.length -1].price;
    }
    subFrame(start, end){
        return new Frame(this.points.slice(start, end));
    }
}
module.exports.Frame = Frame;
