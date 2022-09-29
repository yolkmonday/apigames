[![CodeFactor](https://www.codefactor.io/repository/github/aripadrian/apigames/badge)](https://www.codefactor.io/repository/github/aripadrian/apigames)
[![Npm package monthly downloads](https://badgen.net/npm/dm/apigames)](https://npmjs.ccom/package/apigames)

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
const client = new Apigames("YOUR MERCHANT ID","YOUR SECRET");
```


### Cek Saldo
```js
let saldo = await client.cekSaldo();
```

### Cek Akun Game
```js
let saldo = await client.cekAkunGame(gameCode, userId);
```

> Game yang tersedia : mobilelegend , freefire, higgs

### Cek Status Koneksi
```js
Coming Soon
```

### Transaksi Versi 1

```js
let transaksi = await client.transaksi(refId, productCode, tujuan);
```


> Note:
> RefID adalah kode transaksi unik kamu yang di generate secara acak

### Transaksi Versi 2

```js
let transaksi = await client.transaksiv2(refId, productCode, tujuan, serverId);
```


> Note:
> RefID adalah kode transaksi unik kamu yang di generate secara acak



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



