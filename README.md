# Animal CLI

A simple Node.js CLI script to create and interact with speaking animals.

## Overview

This project consists of a set of animal classes, including Cat, Dog, Cow, and Unicorn, each with its own unique speaking behavior. 
The script allows you to create animals by specifying their name and type through the command line.

## Prerequisites

Before running the script, ensure you have Node.js installed on your machine. 
You can download it from [https://nodejs.org/](https://nodejs.org/).

## Installation

1. Clone or download the project repository to your local machine
2. Navigate to the project directory
3. Install the project dependencies with `npm install`

## Usage

To create and interact with animals, use the following command-line syntax:

```bash
node Animal.js [name] [type]
```

Replace `[name]` with the desired name of the animal and `[type]` with the type of animal you want to create (e.g., cat, dog, cow, unicorn).

### Example:

```bash
node Animal.js Bean cat
```

This command will create a cat named "Bean" that says "Meow".

- Ensure that you provide both the name and type of the animal when running the script.
- If an unknown animal type is provided, the script will display a message indicating valid animal types.
