const Apigames = require('./index')

const apiSdk = new Apigames('M220214LJPD6374UM', '30d19bbcd6c9784c020b135c818e8291c00e1a3d12e143c7bb924492c1e57cfb')

apiSdk.cekAkunGame('freefire', '1325070844').then(r => {
  console.log(r);
})
