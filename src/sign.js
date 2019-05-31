const crypto = require("crypto")
const { createECDH, ECDH , createHmac } = require('crypto');
const ecdh = createECDH('secp256k1');
const secp256k1 = require('secp256k1')
const createKeccakHash = require('keccak')

class NewTransaction{
        constructor(key, tx){
                this.PrivateKey = key
                this.ecdhkey = ecdh.setPrivateKey(key,"hex")
                this.to = Buffer.from(tx.To, "hex")
                this.Tx = [
			this.to,//40
                        Buffer.from(ecdh.getPublicKey('hex'), "hex"),//128
                        Buffer.from(tx.Balance.padStart(40,"0"), "hex"),//40
                        Buffer.from(tx.Nonce.padStart(10,"0"), "hex"),//10
                        Buffer.from(tx.Gas.padStart(40,"0"), "hex"),//40
                        Buffer.from(tx.Type.padStart(10,"0"), "hex"),//10
			Buffer.from("a64".padStart(10,"0"), "hex"),
                        Buffer.from(tx.Input, "hex")//un
                ]
        }
        get EncodeHex(){
                return Buffer.concat(this.Tx).toString('hex');
        }
        Decode(tx){
		//if(tx.length>400){
		//	tx = tx.substring(142)
		//}
                this.result = {
                        to              :tx.slice(0, 40)                ,
                        publicKey       :tx.slice(40, 170)              ,
                        balance         :tx.slice(170, 210)             ,
                        nonce           :parseInt(tx.slice(210, 220),10),
                        fee             :tx.slice(220, 260),
			gas             :tx.slice(220, 260)             ,
                        type            :parseInt(tx.slice(260, 270),16).toString(16),
                        crypto          :parseInt(tx.slice(270, 280),16).toString(16),
                        input           :tx.slice(280, tx.length+10)    ,
			sign		:this.GetSignRawHex()
                }
                return this.result
        }
	GetSignRawHex(){
		let msgs = crypto.createHash("sha256").update(this.EncodeHex).digest();
		return  secp256k1.sign(msgs, Buffer.from(this.PrivateKey,"hex"))["signature"].toString("hex")
	}
	GetTx(){
		return this.Decode(this.EncodeHex)
	}
	GetSignRawHexFull(){
		let method = "signTransaction"
		let result = this.GetTx()
		return {
			"method":method,
			"result":result,
			"message":"",
			"txid":"",
		}
	}
}

module.exports = {NewTransaction}
