## log

- [ts-programming](./00-ts-programming/) - TypeScript Programming, O'Reilly, Boris Cherny
- [type-chain](./type-chain/)
- [time-extension](./timer-extension/)

## typescript setup

- command

  ```shell
  # create a new dir
  mkdir NEW_DIR
  cd NEW_DIR

  # initiate NPM Project
  npm init

  # set up TSC, TSLint, NodeJS
  npm install --save-dev typescript tslint @types/node

  # set up tsc-watch, ts-node
  npm install --save-dev tsc-watch ts-node
  ```

- script

  ```json
  "scripts": {
  "start": "tsc-watch --onSuccess \" node dist/\" "
  },
  ```

- `tsconfig.json`

  - [doc](https://www.typescriptlang.org/tsconfig

  ```json
  {
    "compilerOptions": {
      "lib": ["ES2015"],
      "module": "commonjs",
      "outDir": "dist",
      "sourceMap": true,
      "strict": true,
      "target": "es2015"
    },
    "include": ["src"]
  }
  ```
