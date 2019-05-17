//secp
const sha256 = require("sha256")
const { createECDH, ECDH , createHmac } = require('crypto');
const ecdh = createECDH('secp256k1');
//eddsa
var EdDSA = require('elliptic').eddsa;
var utils = require('elliptic').utils
var ec = new EdDSA('ed25519');

class NewAccount {
	constructor(key) {
		this.PrivateKey = key
		ecdh.setPrivateKey(key,"hex")
	}
	GeneratePrivateKey(secret){
		return createHmac('sha256', secret).update(secret).digest('hex');
	}
	get Address(){
		return sha256(this.PublicKey).substr(24,64)
	}
	get PublicKey(){
		return ecdh.getPublicKey('hex').substring(2);
	}
}

class NewAccountEddsa {
	constructor(key) {
		this.EC = ec.keyFromSecret(key)
	}
	GeneratePrivateKey(secret){
		return utils.toHex(this.EC.privBytes());
	}
	get Address(){
		return sha256(this.PublicKey).substr(24,64)
	}
	get PublicKey(){
		return sha256(utils.toHex(this.EC.pubBytes()));
	}
}

module.exports = {NewAccount, NewAccountEddsa};

