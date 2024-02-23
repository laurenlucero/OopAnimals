// A simple Node CLI script to create animals that speak.
// Usage: node Animal.js [name] [type]

class Animal {
  // Base class representing an animal with a name.
  constructor(name) {
    this.name = name;
  }

  speak() {
    // To be overridden by subclasses
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
const [name, type] = process.argv.slice(2);

if (!name || !type) {
  console.log("Please provide both name and type of the animal");
  process.exit(1);
}

if (animalTypes[type]) {
  const animal = new animalTypes[type](name);
  console.log(animal.speak());
} else {
  console.log(handleUnknownAnimal(name, type));
}
