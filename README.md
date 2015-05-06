# ReactJS + JEST + GULP + JSPM - Seed

Seed project for writing ReactJS components in TDD fashion. This seed uses Jest for unit testing, Gulp for building and JSPM as the browser package manager.

**Note:** We use System.js ( comes with JSPM ) for module loading.

## Install

Clone this repo and run npm install
```
git clone git@github.com:shidhincr/react-jest-gulp-jspm-seed.git

npm install
```

## Usage 

There are two main gulp tasks. Run both tasks in two different terminal tabs, so that you can develop the component in TDD way.

**Develop**

```js 
gulp develop
```

This task will open the browser ( using BrowserSync ) and load the `index.html`. It will then wait for any changes in the scripts folder, and reload the browser.

**Test**

```js 
gulp test
```

This task runs the unit tests using `jest`. It will also wait for any changes in the `__tests__` or `scripts` folder to re-run the tests.