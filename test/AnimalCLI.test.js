const AnimalCLI = require("../AnimalCLI");

describe("AnimalCLI Class", () => {
  test("processCommandLineInput should return null for missing input", () => {
    // Mock the process.argv array to simulate missing input
    process.argv = ["node", "Animal.js"];
    expect(AnimalCLI.processCommandLineInput()).toBeNull();
  });

  test("processCommandLineInput should return an object for valid input", () => {
    // Mock the process.argv array to simulate valid input
    process.argv = ["node", "Animal.js", "Luffy", "cat"];
    expect(AnimalCLI.processCommandLineInput()).toEqual({
      name: "Luffy",
      type: "cat",
    });
  });

  test("Process command line type input is not case-sensitive", () => {
    // Simulate command line arguments
    process.argv = ["node", "Animal.js", "Wednesday", "CAT"];

    const result = AnimalCLI.processCommandLineInput();

    expect(result).toEqual({
      name: "Wednesday",
      type: "cat",
      favoriteFood: undefined,
    });
  });
});
