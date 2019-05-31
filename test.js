const sdag = require("./index.js")
const pri = "A665A45920422F9D417E4867EFDC4FB8A04A1F3FFF1FA07E998E86F7F7A27AE1"

AccountTest()
TransactionTest()

function AccountTest(){
	let account = new sdag.Accounts.NewAccount(pri)
	console.log("privateKey check:", account.GeneratePrivateKey("1123")==="688889c832425e0609a91ee50f556b3e4b445fce55f910ee7f1ea6cf04484e8e")
	console.log(account.Address)
	console.log("address check:", account.Address)
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
		Input : "608060405234801561001057600080fd5b5060e68061001f6000396000f3fe6080604052600436106043576000357c01000000000000000000000000000000000000000000000000000000009004806360fe47b11460485780636d4ce63c14607f575b600080fd5b348015605357600080fd5b50607d60048036036020811015606857600080fd5b810190808035906020019092919050505060a7565b005b348015608a57600080fd5b50609160b1565b6040518082815260200191505060405180910390f35b8060008190555050565b6000805490509056fea165627a7a72305820249bb454073330c3d8e1b947438e2afa246e6705d2b5692b3764c41845d4bf3b0029"
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
