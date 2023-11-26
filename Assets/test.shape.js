const { Triangle, Square, Circle } = require("./shapes"); 

describe("Triangle Test", () => {
    test("test for triangle with a blue background", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(
            '<polygon points="150, 18 244, 182 56, 182" fill="blue" />' 
        );
    });
});

describe("Square Test", () => {
    test("test for square with a purple background", () => {
        const shape = new Square();
        shape.setColor("purple");
        expect(shape.render()).toEqual(
            '<rect x="73" y="40" width="160" height="160" fill="purple" />'
        );
    });
});

describe("Circle Test", () => {
    test("test for circle with a yellow background", () => {
        const shape = new Circle();
        shape.setColor("yellow");
        expect(shape.render()).toEqual(
            '<circle cx="150" cy="115" r="80" fill="yellow" />' 
        );
    });
});