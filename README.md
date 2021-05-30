![VersionBadge](https://img.shields.io/badge/Version-1.0.0-success)
![Badge](https://img.shields.io/badge/React-blue)
![Badge](https://img.shields.io/badge/Typescript-9cf)
![Badge](https://img.shields.io/badge/Scss-9cf)
![Badge](https://img.shields.io/badge/lodash-9cf)
![Badge](https://img.shields.io/badge/MaterialUI-blueviolet)
![Badge](https://img.shields.io/badge/Jest-green)

# Sudoku

## Running

#### See demo hosted [there](https://arkadiuszpasek.github.io/sudoku)

#

#### Development

To start working with the application:

```
npm install
npm start
```

The project was built usign VSCode with Eslint & Prettier enforcing code style

#

#### Building & hosting locally

```
npm run build
npm run server
```

# Improvement Roadmap

- Must-Have
  - [Game generating](https://github.com/arkadiuszpasek/sudoku/issues/1)
  - User notifications
    - Notification about incorrect input for a custom game
- Nice-to-have
  - [More clear ux for custom sudoku input](https://github.com/arkadiuszpasek/sudoku/issues/2)

## Testing

`npm run test`

`npm run test -- -t 'testName'` - where `describe('testName', () => ..)`

Example input value

```
[
  [null,2,3,null,5,null,7,8,null],
  [null,null,null,null,null,6,null,null,null],
  [null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,9],
  [null,null,null,null,null,null,null,null,null],
  [1,null,null,null,null,null,null,null,null]
]
```
