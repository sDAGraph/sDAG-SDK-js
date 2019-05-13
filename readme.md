# sDAG-SDK-js

``` bash
npm i sdagsign
```

```
const pri = $key 
let account = new sdag.Accounts.NewAccount(pri)
console.log("privateKey check:", account.GeneratePrivateKey("1123"))
console.log("address check:", account.Address)
console.log("publkey check:", account.PublicKey)

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
transaction.GetSignRawHex(pri,result).then(function(sig){
	console.log(sig.toString("hex")+result)
	console.log(transaction.Decode(sig.toString("hex")+result))
})
 
```


