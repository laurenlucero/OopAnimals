const AnimalCLI = require("./AnimalCLI");

// A simple Node CLI script to create animals that speak.
// Usage: node Animal.js [name] [type]

class Animal {
  // Base class representing an animal with a name.
  constructor(name, type, favoriteFood = "treats") {
    this.name = name;
    this.type = type;
    this.favoriteFood = favoriteFood;
  }

  speak() {
    // To be overridden by subclasses
  }

  eat() {
    return `${this.type}s enjoy eating ${this.favoriteFood}`;
  }
}

class Cat extends Animal {
  speak() {
    return `${this.name} says "Meow" 😸`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} says "Woof" 🐶`;
  }
}

class Cow extends Animal {
  speak() {
    return `${this.name} says "Moo" 🐮`;
  }
}

class Unicorn extends Animal {
  speak() {
    return "Unicorns are too fabulous for labels and words ✨🦄✨";
  }
}

const animalTypes = {
  animal: Animal,
  cat: Cat,
  dog: Dog,
  cow: Cow,
  unicorn: Unicorn,
};

const handleUnknownAnimal = (name, type) => {
  const validTypes = Object.keys(animalTypes).join(", ");
  return `${name} the ${type} is an unknown animal. Valid types are: ${validTypes}`;
};

// Command line input processing
const commandLineInput = AnimalCLI.processCommandLineInput();

if (commandLineInput) {
  const { name, type, favoriteFood } = commandLineInput;

  if (animalTypes[type]) {
    const animal = new animalTypes[type](name, type, favoriteFood);
    console.log(animal.speak());
    console.log(animal.eat());
  } else {
    console.log(handleUnknownAnimal(name, type));
  }
}

module.exports = { Animal, Cat, Dog, Cow, Unicorn, handleUnknownAnimal };
