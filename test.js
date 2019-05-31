const sdag = require("./index.js")
const pri = "A665A45920422F9D417E4867EFDC4FB8A04A1F3FFF1FA07E998E86F7F7A27AE3"

AccountTest()
TransactionTest()

function AccountTest(){
	let account = new sdag.Accounts.NewAccount(pri)
	console.log("privateKey check:", account.GeneratePrivateKey("1123")==="688889c832425e0609a91ee50f556b3e4b445fce55f910ee7f1ea6cf04484e8e")
	console.log(account.Address)
	console.log("address check:", account.Address==="a3d5b73a8e19e763df8ed9eb3e97c78958d440fb")
	console.log("publkey check:", account.PublicKey==="f70d5628a90211000e44d73370fb3ace0579131cfc9c7d1e5c5a66901c7afe4e81516680ef378aab795e9ffd06b4583930aeda10555f5816e4de118ce074907b")
	console.log("pubkey print:",account.PublicKey)
}

function TransactionTest(){
	tx = {
		To : "5834388a0f62d75bd059300fa02c1a938a301007",
		PrivateKey : pri,
		Balance : "1",
		Nonce : "210",
		Gas : "10",
		Type : "a64",
		Input : "ccaacc11111111111111111111111111111111111111111111111aa1"
	}
	let transaction = new sdag.Signs.NewTransaction(pri,tx)
	let result = transaction.EncodeHex
	console.log("encode:",result)
	console.log("test GetSignRawHex",transaction.GetSignRawHex())
	console.log("test GetTx",transaction.GetTx())
	console.log("test GetSignRawHexFull", transaction.GetSignRawHexFull())
}

let chain = new sdag.Chains("http://192.168.51.212:9999")

chain.getTransaction("e7a9479dc5786f21a777377ea92ce29182eb86e9c23154b95562ea02db22e854").then(
	result =>{console.log(result.tx)}
)

chain.getBlockByHash("cfb800e969b3900d3a00489a1cc5f25755846b06086e39bf63ef0514ece901b1").then(
        result =>{console.log(result.blockNumber)}
)

chain.getBlockByNumber("1").then(
        result =>{console.log("num:",result.blockNumber)}
)

chain.getAccount("e658e4a47103b4578fd2ba6aa52af1b9fc67c129").then(
        result =>{console.log("account:",result.balance)}
)
