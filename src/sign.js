const crypto = require("crypto")
const eccrypto = require("eccrypto")
const { createECDH, ECDH , createHmac } = require('crypto');
const ecdh = createECDH('secp256k1');


class NewTransaction{
        constructor(key, tx){
                this.PrivateKey = key
                this.ecdhkey = ecdh.setPrivateKey(key,"hex")
                this.to = Buffer.from(tx.To, "hex")
                this.Tx = [this.to,//40
                        Buffer.from(ecdh.getPublicKey('hex').substring(2), "hex"),//128
                        Buffer.from(this.PrivateKey, "hex"),//64
                        Buffer.from(tx.Balance.padStart(40,"0"), "hex"),//40
                        Buffer.from(tx.Nonce.padStart(10,"0"), "hex"),//10
                        Buffer.from(tx.Gas.padStart(40,"0"), "hex"),//40
                        Buffer.from(tx.Type.padStart(10,"0"), "hex"),//10
                        Buffer.from(tx.Input, "hex")//un
                ]
        }
        get EncodeHex(){
                return Buffer.concat(this.Tx).toString('hex');
        }
        Decode(tx){
		if(tx.length>400){
			tx = tx.substring(142)
		}
                this.result = {
                        To              :tx.slice(0, 40)                ,
                        PublicKey       :tx.slice(40, 168)              ,
                        PrivateKey      :tx.slice(168, 232)             ,
                        Balance         :tx.slice(232, 272)             ,
                        Nonce           :tx.slice(272, 282)             ,
                        Gas             :tx.slice(282, 322)             ,
                        Type            :tx.slice(322, 332)             ,
                        Input           :tx.slice(332, tx.length+10)    ,
                }
                return this.result
        }
	GetSignRawHex(){
		let msgs = crypto.createHash("sha256").update(this.EncodeHex).digest();
		return eccrypto.sign(Buffer.from(this.PrivateKey,"hex"), msgs)
	}
}

module.exports = {NewTransaction}
