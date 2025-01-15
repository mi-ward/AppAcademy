class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    getPerimeter() {
        return this.side1 + this.side2 + this.side3
    }

    hasValidSideLengths() {
        let oneTwo = this.side1 + this.side2;
        let twoThree = this.side2 + this.side3;
        let threeOne = this.side3 + this.side1;

        return ((oneTwo > this.side3) && (twoThree > this.side1) && (threeOne > this.side2))
    }

    validate() {
        this.isValid = this.hasValidSideLengths();
    }

    static getValidTriangles(...triangleArgs) {
        return triangleArgs.filter((t) => {
            t.validate();
            return t.isValid;
        })
    }
}

module.exports = Triangle;
