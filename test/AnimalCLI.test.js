const AnimalCLI = require("../AnimalCLI");

describe("AnimalCLI Class", () => {
  test("processCommandLineInput should return null for missing input", () => {
    // Mock the process.argv array to simulate missing input
    process.argv = ["node", "Animal.js"];
    expect(AnimalCLI.processCommandLineInput()).toBeNull();
  });

  test("processCommandLineInput should return an object for valid input", () => {
    // Mock the process.argv array to simulate valid input
    process.argv = ["node", "Animal.js", "Fluffy", "cat"];
    expect(AnimalCLI.processCommandLineInput()).toEqual({
      name: "Fluffy",
      type: "cat",
    });
  });
});
