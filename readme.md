# sDAG-SDK-js

``` bash
npm i sdagsign
```

## example
```
//create an account
const pri = $key 
let account = new sdag.Accounts.NewAccount(pri)
console.log(account.GeneratePrivateKey("1123"))
console.log(account.Address)
console.log(account.PublicKey)

//create a transaction tx
tx = {
	To : "a3d5b73a8e19e763df8ed9eb3e97c78958d440fb",
	PrivateKey : pri,
	Balance : "1",
	Nonce : "1",
	Gas : "1",
	Type : "aaa",
	Input : "daa11234"
}
let transaction = new sdag.Signs.NewTransaction(pri,tx)
let result = transaction.EncodeHex
transaction.GetSignRawHex().then(function(sig){
	//create broadcast tx
	console.log(sig.toString("hex")+result)
})
 
```


