# the boilerplate using the redux-saga.

It is the boilerplate of single page application using the redux-saga.
It doesn't support server-side rendering.

## Server side

- Node.js
- hapi.js

## Client side

- redux
- redux-saga
- react
- react-router

## Get started

```bash
$ git clone git@github.com:nabeliwo/redux-saga-boilerplate.git

$ cd redux-saga-boilerplate
$ npm install
```

In order to launch the server, and then prepare a config file.

```json
// config/default.json

{
  "host": "127.0.0.1"
}
```

```bash
# run
$ npm run dev # to develop
# Server running at: http://localhost:3000

# develop
$ npm run watch-js # watchify
$ npm run lint # eslint
```
