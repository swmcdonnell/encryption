/**
 * Encrypt/Decrypt using CryptoJS
 * Packages the example from crypto-js documentation into two functions
 */

var CryptoJS = require('crypto-js');

module.exports = {
    /**
     * Encrypt
     * @param {String} string
     * @param {String} secret
     * @returns {String}
     */
    encrypt: function (string, secret) {
        var cipherParams = CryptoJS.AES.encrypt(string, secret);
        var jsonObj = {
            ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64)
        };
        if (cipherParams.iv) {
            jsonObj.iv = cipherParams.iv.toString();
        }
        if (cipherParams.salt) {
            jsonObj.s = cipherParams.salt.toString();
        }
        return JSON.stringify(jsonObj);
    },
    /**
     * Decrypt
     * @param {String} string
     * @param {String} secret
     * @returns {String}
     */
    decrypt: function (string, secret) {
        var jsonObj = JSON.parse(string);
        var cipherParams = CryptoJS.lib.CipherParams.create({
            ciphertext: CryptoJS.enc.Base64.parse(jsonObj.ct)
        });
        if (jsonObj.iv) {
            cipherParams.iv = CryptoJS.enc.Hex.parse(jsonObj.iv)
        }
        if (jsonObj.s) {
            cipherParams.salt = CryptoJS.enc.Hex.parse(jsonObj.s)
        }
        var dec = CryptoJS.AES.decrypt(cipherParams, secret);
        return dec.toString(CryptoJS.enc.Utf8);
    }
};
