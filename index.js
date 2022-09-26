const crypto = require("crypto")
const rp = require("request-promise-native");

class Apigames {
  /**
   * @param {string} merchant - Merchant ID
   * @param {string} secret - Secret Key
   **/
  constructor(merchant, secret) {
    this._merchant = merchant;
    this._secret = secret;
    this._endpoint = "https://v1.apigames.id"
  }

  cekSaldo() {
    let signature = crypto
      .createHash('md5')
      .update(`${this._merchant}${this._secret}`)
      .digest('hex')

    const options = {
      method: "GET",
      uri: `${this._endpoint}/merchant/${this._merchant}?signature=${signature}`,
      json: true,
    };

    return rp(options)
      .then(function (resp) {
        if (resp.data) {
          if (typeof resp.data.saldo !== undefined) {
            return resp.data.saldo;
          } else {
            throw Error(resp.data.error_msg);
          }
        }
      })
      .catch(function (err) {
        throw Error(err);
      });
  }


  /**
   * @param {string} productCode - Kode Produk
   * @param {string} tujuan - Tujuan Pengisian
   * @param {string} refId - Ref ID Unik Anda
   **/
  transaksi(productCode, tujuan, refId) {
    const options = {
      method: 'GET',
      uri: `${this._endpoint}/transaksi/http-get-v1?merchant=${this._merchant}&secret=${this._secret}&produk=${productCode}&tujuan=${tujuan}&ref=${refId}`,
      json: true,
    };

    return rp(options)
      .then(function (resp) {
        if (resp.data) {
          return resp.data;
        }
      })
      .catch(function (err) {
        throw Error(err);
      });
  }


  /**
   * @param {string} gameCode - Kode Game
   * @param {string} userId - User ID
   **/
  cekAkunGame(gameCode, userId) {
    let signature = crypto
      .createHash('md5')
      .update(`${this._merchant}${this._secret}`)
      .digest('hex')
    const options = {
      method: 'GET',
      uri: `${this._endpoint}/merchant/${this._merchant}/cek-username/${gameCode}?user_id=${userId}&signature=${signature}`,
      json: true,
    };

    return rp(options)
      .then(function (resp) {
        if (resp) {
          return resp;
        }
      })
      .catch(function (err) {
        throw Error(err);
      });
  }
}

module.exports = Apigames;
