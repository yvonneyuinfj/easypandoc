# PandocJS

## Introduction

PandocJS is a Node.js module designed for document conversions between different markup languages, leveraging the power of the Pandoc command-line tool. This module utilizes execa, a modern and user-friendly process execution tool, to interface with Pandoc. Implemented using ECMAScript Modules (ESM), PandocJS offers a modern and easy-to-use interface for Node.js applications.

## Prerequisites

Before installing PandocJS, ensure you have the following:

- Node.js (version 12.x or higher).
- Pandoc installed on your system. PandocJS relies on the Pandoc command-line tool for document conversions. Visit [Pandoc's installation guide](https://pandoc.org/installing.html) for instructions on how to install Pandoc on your platform.

## Installation

Ensure you have Node.js (version 12.x or higher) and npm (or Yarn) installed on your system. Install PandocJS using the following commands:

```bash
# Using npm
npm install pandocjs

# Using Yarn
yarn add pandocjs
```

## Usage
Here's how to use PandocJS to convert a Markdown file to HTML in an ESM-compatible environment:

```javascript
import pandocJS from 'pandocjs';

const options = {
    sourceType: 'markdown',
    sourceFilePath: 'path/to/source/file.md',
    targetType: 'html',
    targetFilePath: 'path/to/target/file.html'
};

pandocJS.convertFile(options)
    .then(() => {
        console.log('Conversion successful!');
    })
    .catch(error => {
        console.error('Conversion failed: ', error.message);
    });
```



PandocJS uses `execa` to manage Pandoc processes, simplifying the handling of input/output streams and improving overall performance and reliability.

## Contributing

We welcome contributions to PandocJS! To contribute:

- Fork the repository on GitHub.
- Clone your fork to your local machine.
- Create a new branch for your feature or fix.
- Commit and push your changes to your branch.
- Submit a pull request from your fork to the main repository.
- Ensure your code follows the project's standards and all tests pass before submitting pull requests.

## Contact
For queries or feedback on PandocJS, open an issue on the GitHub repository. We value your contributions and will respond promptly.
