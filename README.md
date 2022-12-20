# What is this?

A simple scaffolding tool for creating a new project to be published to npm.  
It provides a build command that will compile your code to a CommonJS Node 14.16 target, allowing named imports for CommonJS packages inside ESM files.  
The package contains a simple "hello world" based on TypeScript, built on esbuild, tested through Jest and linted with ESLint and Prettier.  
It also provides a Husky pre-commit hook to run some linting based on prettier and eslint and run tests, so you can simple `git add` and `git commit` without worrying about anything else.

## How To Install?

```bash
git clone git://github.com/Cadienvan/npm-package-ts-scaffolding.git package_name
cd package_name
npm install
npx husky install
```

## What do you mean by `allowing named imports from CommonJS`?

If you try to run `npm run build` you will be able to import the `sayHello` function from the `index.js` file, both via `require` and `import` syntax.

### Importing via `require`

```js
const { sayHello } = require('my-package');
```

### Importing via `import`

```js
import { sayHello } from 'my-package';
```

# Why did you build it?

I got tired of copying and pasting the same files over and over again.  
This is a simple tool to create a new project with the basic files needed to publish to npm.

# How can I personalize it?

You can change the `package.json` file to your liking, bringing your own package name and description.  
Please, remember to give me a star if you like the project!

# What's Inside?

- Typescript
- Jest
- Eslint
- Prettier
- Husky
- Esbuild
- Commitlint

# How to push and release an update?

```bash
git add --all
git commit -m "chore: update package"
npm run release:patch
```

Remember to follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard.
You can substitute `patch` with `minor` or `major` to update the version accordingly.

# How to run tests?

```bash
npm test
```

# Contributing

If you want to contribute to this project, please open an issue or a pull request.  
I will be happy to review it and merge it if it's useful.  
Please, remember to follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard.  
