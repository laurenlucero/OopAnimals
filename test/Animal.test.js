const {
  Animal,
  Cat,
  Dog,
  Cow,
  Unicorn,
  handleUnknownAnimal,
} = require("../Animal");

describe("Animal Class", () => {
  jest.spyOn(require("../AnimalCLI"), "processCommandLineInput");

  beforeEach(() => {
    jest.clearAllMocks();
    require("../AnimalCLI").processCommandLineInput.mockReturnValue({
      name: "Generic",
      type: "animal",
      favoriteFood: "treats",
    });
  });

  test("Animal should have a default speak method", () => {
    const animal = new Animal("Generic");
    expect(animal.speak()).toBe('Generic says "ILY" 🤟');
  });

  test("Animal should have a default eat method", () => {
    const animal = new Animal("Generic", "animal");
    expect(animal.eat()).toBe("animals enjoy eating treats");
  });

  test('Cat should speak "Meow"', () => {
    const cat = new Cat("Bean");
    expect(cat.speak()).toBe('Bean says "Meow" 😸');
  });

  test('Dog should speak "Woof"', () => {
    const dog = new Dog("Lucky");
    expect(dog.speak()).toBe('Lucky says "Woof" 🐶');
  });

  test('Cow should speak "Moo"', () => {
    const cow = new Cow("Coco");
    expect(cow.speak()).toBe('Coco says "Moo" 🐮');
  });

  test("Unicorn should have a fabulous message", () => {
    const unicorn = new Unicorn("Sparkle");
    expect(unicorn.speak()).toBe(
      "Unicorns are too fabulous for labels and words ✨🦄✨"
    );
  });
  test("Default favorite food should be treats", () => {
    const animal = new Animal("Generic", "animal");
    expect(animal.eat()).toBe("animals enjoy eating treats");
  });

  test("Favorite food argument should override default", () => {
    const animal = new Animal("Generic", "animal", "snacks");
    expect(animal.eat()).toBe("animals enjoy eating snacks");
  });
});

describe("handleUnknownAnimal Function", () => {
  test("Unknown animal type should return appropriate message", () => {
    const message = handleUnknownAnimal("Fluffy", "dragon");
    const expected =
      "Fluffy the dragon is an unknown animal. Valid types are: animal, cat, dog, cow, unicorn";
    expect(message).toBe(expected);
  });
});
