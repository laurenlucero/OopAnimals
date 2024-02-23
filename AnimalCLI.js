class AnimalCLI {
  static processCommandLineInput() {
    const [name, type] = process.argv.slice(2);

    if (!name || !type) {
      console.log("Please provide both name and type of the animal");
      return null;
    }

    return { name, type };
  }
}

module.exports = AnimalCLI;
