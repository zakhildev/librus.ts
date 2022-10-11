# librus.ts
Library for interacting with the Librus API

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