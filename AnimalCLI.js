class AnimalCLI {
  static processCommandLineInput() {
    const [name, type, favoriteFood] = process.argv.slice(2);
    if (!name || !type) {
      console.log("Please provide both name and type of the animal");
      return null;
    }

    const lowerCaseType = type.toLowerCase();

    return { name, type: lowerCaseType, favoriteFood };
  }
}

module.exports = AnimalCLI;
