const main = require("./index.js")

const pri = "e7a3d2759c20e411516fe338bdd7121810dd131331550494bed4c80f070e621d"
let account = new main.Account(pri)

console.log("privateKey check:", account.GeneratePrivateKey("1123"))
console.log("address check:", account.Address==="a3d5b73a8e19e763df8ed9eb3e97c78958d440fb")
console.log("publkey check:", account.PublicKey==="f70d5628a90211000e44d73370fb3ace0579131cfc9c7d1e5c5a66901c7afe4e81516680ef378aab795e9ffd06b4583930aeda10555f5816e4de118ce074907b")

tx = {
	To : "a3d5b73a8e19e763df8ed9eb3e97c78958d440fb",
	PrivateKey : pri,
	Balance : "1",
	Nonce : "1",
	Gas : "1",
	Type : "aaa",
	Input : "aa1123"
}
let transaction = new main.Transaction(pri,tx)
let result = transaction.EncodeHex
console.log(transaction.Decode(result))

