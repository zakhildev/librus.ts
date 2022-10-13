<img alt="" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI5NjMuMTg1MTgzMDgzODY0MyIgaGVpZ2h0PSIzNTAuNjIxNjM5MzEyNTgxIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cmVjdCBpZD0iYmFja2dyb3VuZHJlY3QiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHg9IjAiIHk9IjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIvPgo8ZGVzYz5DcmVhdGVkIHdpdGggRmFicmljLmpzIDQuMi4wPC9kZXNjPgo8ZGVmcz4KPC9kZWZzPgoKCgo8ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PGcgaWQ9IjFmODAyMjE1LWFlNTgtNDIzNy1hNTRiLWNjOTNhNTU3NDFhNyI+CjwvZz48ZyBzdHlsZT0iIiBpZD0iMjYwZDQ0NDQtOWY0ZS00YzQ2LWE1NjEtZmEzNzY0MWI1YTZkIiBjbGFzcz0iIiB0cmFuc2Zvcm09IiI+CgkJPHRleHQgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZm9udC1mYW1pbHk9IlJhbGV3YXkiIGZvbnQtc2l6ZT0iMjAwIiBmb250LXN0eWxlPSJub3JtYWwiIGZvbnQtd2VpZ2h0PSI5MDAiIHN0eWxlPSJzdHJva2U6IG5vbmU7IHN0cm9rZS13aWR0aDogMTsgc3Ryb2tlLWRhc2hhcnJheTogbm9uZTsgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7IHN0cm9rZS1kYXNob2Zmc2V0OiAwOyBzdHJva2UtbGluZWpvaW46IG1pdGVyOyBzdHJva2UtbWl0ZXJsaW1pdDogNDsgZmlsbDogcmdiKDAsMTIyLDIwNCk7IGZpbGwtcnVsZTogbm9uemVybzsgb3BhY2l0eTogMTsgd2hpdGUtc3BhY2U6IHByZTsiIHN0cm9rZS13aWR0aD0iMCIgaWQ9InN2Z18yIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjM0NDY2IDAgMCAxLjM0NDY2IDcwNi4yOTkgMzQzLjcyNykiIHk9Ii0xMjMuMjcwMjQ2NDk2MDA0OTIiIHg9Ii0xMTIuODQ3NTkyODcxNjIwNDYiPjx0c3BhbiB4PSItNTE0LjA0NzU5Mjg3MTYyMDUiIHk9Ii02MC40NDAyNDY0OTYwMDQ5MiIgaWQ9InN2Z18zIj5saWJydXMudHM8L3RzcGFuPjwvdGV4dD4KPC9nPjwvZz48c3R5bGUgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiPkBpbXBvcnQgdXJsKGh0dHA6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXkpOzwvc3R5bGU+PC9zdmc+" />

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