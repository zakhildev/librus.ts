![vectorpaint](https://user-images.githubusercontent.com/57961635/195657634-2c2c6297-5008-4bae-96c7-70ba79f35fc5.svg)


![npm bundle size](https://img.shields.io/bundlephobia/min/librus.ts)
![npm version](https://img.shields.io/npm/v/librus.ts)
![npm downloads](https://img.shields.io/npm/dw/librus.ts)

## Installation
* npm:
  ```bash
  npm install librus.ts
  ```
* yarn:
  ```bash
  yarn add librus.ts
  ```
* pnpm:
  ```bash
  pnpm add librus.ts
  ```

## Usage
```js
import { Librus } from 'librus.ts'; // ES6 Module
const { Librus } = require('librus.ts');  // CommonJS

const client = new Librus('login', 'password');

(async () => {
  await client.login();
  const me = await client.modules.users.getSelf();  // Fetch loggined in user
  console.log(me);
})();
```

## Credits
[@michallm](https://github.com/michallm) - helped with axios config 💖
