class Animal {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
    printName() {
        console.log(`The name of this animal is 
${this.name}.`);
    }
    showHeight() {
        console.log(`The height of this animal is 
${this.height} in.`);
    }
    showWeight() {
        console.log(`The weight of this animal is 
${this.weight} oz.`);
    }
}

class Bird extends Animal {
    constructor(name, height, weight, carnivorous) {
        super(name, height, weight);
        this.carnivorous = carnivorous;
    }

    checksIfCarnivorous() {
        if (this.carnivorous == "meat"){
            console.log(`This animal eats ${this.carnivorous}`);
        } else {
            console.log("This animal is not carnivorous!")
        }
    }
}

let newAnimal = new Bird("hummingbird", 3, 1, "plant");

newAnimal.printName()
newAnimal.showHeight()
newAnimal.showWeight();
newAnimal.checksIfCarnivorous();