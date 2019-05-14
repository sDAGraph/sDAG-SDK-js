const sha256 = require("sha256")
const { createECDH, ECDH , createHmac } = require('crypto');
const ecdh = createECDH('secp256k1');
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

module.exports = {NewAccount};

