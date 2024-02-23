const fs = require("fs");
const AnimalCLI = require("./AnimalCLI");

// Base class representing an animal with a name.
class Animal {
  constructor(name, type, favoriteFood = "treats") {
    this.name = name;
    this.type = type;
    this.favoriteFood = favoriteFood;
  }

  // To be overridden by subclasses
  speak() {
    return `${this.name} says "ILY" 🤟`;
  }

  eat() {
    return `${this.type}s enjoy eating ${this.favoriteFood}`;
  }
  // TODO: Add unit tests for saving and loading
  // Save animal data to a JSON file
  static saveAll(animals) {
    const animalData = animals.map(({ name, type, favoriteFood }) => ({
      name,
      type,
      favoriteFood,
    }));

    try {
      fs.writeFileSync("animals.json", JSON.stringify(animalData));
      console.log("All animals data saved to animals.json");
    } catch (error) {
      console.error(`Error saving animals data: ${error.message}`);
    }
  }

  // Load all animals from a JSON file
  static loadAll() {
    try {
      const data = fs.readFileSync("animals.json", "utf8");
      const animalData = JSON.parse(data);

      const loadedAnimals = animalData.map(({ name, type, favoriteFood }) => {
        const AnimalType = animalTypes[type];
        return new AnimalType(name, type, favoriteFood);
      });

      console.log("Animals data loaded successfully");
      return loadedAnimals;
    } catch (error) {
      console.error(`Error loading animals data: ${error.message}`);
      return [];
    }
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

// Function to handle unknown animal type
const handleUnknownAnimal = (name, type) => {
  const validTypes = Object.keys(animalTypes).join(", ");
  return `${name} the ${type} is an unknown animal. Valid types are: ${validTypes}`;
};

// Command line input processing
const commandLineInput = AnimalCLI.processCommandLineInput();

if (commandLineInput) {
  const { name, type, favoriteFood } = commandLineInput;

  if (animalTypes[type]) {
    // Creating a new animal instance
    const animal = new animalTypes[type](name, type, favoriteFood);
    console.log(animal.speak());
    console.log(animal.eat());

    // Loading all animals, adding the new one, and saving all animals
    const allAnimals = Animal.loadAll();
    allAnimals.push(animal);
    Animal.saveAll(allAnimals);
  } else {
    // Handling unknown animal type
    const loadedAnimals = Animal.loadAll();
    const foundAnimal = loadedAnimals.find(
      (animal) => animal.name === name && animal.type === type
    );

    if (foundAnimal) {
      console.log(foundAnimal.speak());
      console.log(foundAnimal.eat());
    } else {
      console.log(handleUnknownAnimal(name, type));
    }
  }
}

module.exports = { Animal, Cat, Dog, Cow, Unicorn, handleUnknownAnimal };
