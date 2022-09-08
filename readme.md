# Apigames Client for Node Js

## On Progress
This library is the abstraction of Apigames API for access from applications written with server-side Javascript.

[![NPM](https://nodei.co/npm/apigames.png)](https://nodei.co/npm/apigames/)


## Installation

```bash
npm install --save apigames
```

## Usage

Configure package with your account's **secret key** obtained from your [Apigames Dashboard](https://member.apigames.id/pengaturan/secret-key).

```js
const Apigames = require('apigames');
const client = new Xendit({
  merchant: "YOUR MERCHANT ID",
  secret: "YOUR SECRET CODE"
});
```


