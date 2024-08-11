// #region Abstract Base Class

class Shape {
  constructor(name) {
    this.name = name;
  }

  // Abstract method
  getArea() {
    throw new Error("Abstract method 'getArea()' must be implemented.");
  }
}

//  #region Encapsulation

class Circle extends Shape {
  #radius; // Private attribut for encapsolution

  constructor(radius) {
    super("Circle");
    this.#radius = radius;
  }

  // Getter for radius
  getRadius() {
    return this.#radius;
  }

  // Setter for radius
  setRadisu(radius) {
    return (this.#radius = radius);
  }

  // Implementation of abstract method
  getArea() {
    return Math.PI * this.#radius * this.#radius;
  }
}

class Rectangle extends Shape {
  #width;
  #height;

  constructor(width, heigth) {
    super("Rectangle");
    this.#height = heigth;
    this.#width = width;
  }

  // handle set, get

  // Implementation of abstract method
  getArea() {
    return this.#width * this.#height;
  }
}

// #region Inheritance

const newCircle = new Circle(20);
newCircle.name = "newCircle";

console.log("newCircle: ", newCircle);

// #region Polymorphism

function printArea(shape) {
  console.log(`The are of the ${shape.name} is ${shape.getArea()}`);
}

const newCircle2 = new Circle(5);
const rectangle = new Rectangle(4, 6);

printArea(newCircle);
printArea(rectangle);
