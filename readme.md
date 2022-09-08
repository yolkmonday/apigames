# Apigames Client for Node Js

This library is the abstraction of Apigames API for access from applications written with server-side Javascript.

[![NPM](https://nodei.co/npm/apigames.png)](https://nodei.co/npm/apigames/)


## Instalasi

```bash
npm install apigames
```

atau

```bash
yarn add apigames
```

## Pemakaian
Dapatkan Merchant ID dan Secret Key Anda di [Apigames Dashboard](https://member.apigames.id/pengaturan/secret-key).

```js
const Apigames = require('apigames');
const client = new Xendit({
  merchant: "YOUR MERCHANT ID",
  secret: "YOUR SECRET CODE"
});
```


### Cek Saldo
```js
let saldo = await client.cekSaldo();
```

### Cek Akun Game
```js
Coming Soon
```

### Cek Status Koneksi
```js
Coming Soon
```

### Transaksi
```js
Coming Soon
```

### Cek Status Transaksi
```js
Coming Soon
```

### Radeem Kiosgamer Garena Shell Bulk
```js
Coming Soon
```

### Cek Status Radeem Kiosgamer Garena Shell Bulk
```js
Coming Soon
```

### License

[MIT](https://github.com/aripadrian/apigames/blob/master/LICENSE)

### Author

[Ari Padrian](mailto:aripadrian@gmail.com)



