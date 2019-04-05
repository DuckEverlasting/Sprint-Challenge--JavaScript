// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
    constructor(input){
        this.length = input.length;
        this.width = input.width;
        this.height = input.height
    }
    volume() {
        return this.height * this.width * this.length
    };  
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    };
};

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
});
    

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(input) {
        super(input);
    }
    volume() {
        return Math.pow(this.length, 3)
    }
    surfaceArea() {
        return 6 * Math.pow(this.length, 2)
    }
}

const cube = new CubeMaker({
    length: 3,
    width: 3,
    height: 3
})

const cuboidCube = new CuboidMaker({
    length: 3,
    width: 3,
    height: 3
})

console.log(cube.volume());
console.log(cuboidCube.volume())

console.log(cuboidCube.surfaceArea())
console.log(cube.surfaceArea());