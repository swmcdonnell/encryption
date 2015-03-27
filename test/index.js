/**
 encryption test
 */
var should = require('chai').should(),
    encryption = require('../index'),
    encrypt = encryption.encrypt,
    decrypt = encryption.decrypt;

describe("encryption", function() {
    it('Encrypts and Decrypts "All Good Men Must Come To The Aid of the Party" with the secret '+
        '"7b144a4d49aac480a136a1d468258ba34260ccb7"', function() {
        decrypt(encrypt("All Good Men Must Come To The Aid of the Party", "7b144a4d49aac480a136a1d468258ba34260ccb7"), "7b144a4d49aac480a136a1d468258ba34260ccb7")
            .should.equal("All Good Men Must Come To The Aid of the Party");
    });
});

