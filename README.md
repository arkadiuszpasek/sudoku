# Sudoku

## Running

#### See demo hosted [there](https://arkadiuszpasek.github.io/sudoku)

#### Development

```
npm install
npm start
```

#### Building & hosting locally

```
npm run build
npm run server
```

# Improvement Roadmap

- MUST-HAVE
  - [Game generating](https://github.com/arkadiuszpasek/sudoku/issues/1)
  - User notifications
    - Notification about incorrect input for a custom game

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
