Encryption
===========

A simple library that provides an encrypt and decrypt function. Uses the crypto-js library with AES encryption.
This library simply packages the examples in the documentation into two easy-to-use functions.

## Installation

    npm install encryption --save

## Usage

    var encryption = require('encryption'),
        encrypt = encryption.encrypt,
        decrypt = encryption.decrypt;

    var string = "All Good Men Must Come to the Aid of the Party";
    var secret = "7b144a4d49aac480a136a1d468258ba34260ccb7";

    var enc = encrypt(string, secret);
    console.log(enc);
    var dec = decrypt(enc, secret);
    console.log(dec);

## Tests

    npm test

## Release History

* 0.1.0 Initial Release