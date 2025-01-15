const Triangle = require('../problems/triangle');

class Isosceles extends Triangle {
    constructor(sameSide, side3) {
        super(sameSide, sameSide, side3)

        this.isValidTriangle = this.hasValidSideLengths();
    }

    isIsosceles() {
        if (this.isValidTriangle) {
            return (this.side1 === this.side2);
        } else {
            return false;
        }
    }

    validate() {
        this.isValidIsosceles = this.isIsosceles()
    }
}


module.exports = Isosceles;
