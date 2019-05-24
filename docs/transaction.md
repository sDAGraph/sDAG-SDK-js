# Transaction

## Transaction initlize

```
const sdag = require("sdagsign")

const pri = "e7a3d2759c20e411516fe338bdd7121810dd131331550494bed4c80f070e621d"

tx = {
	To : "5834388a0f62d75bd059300fa02c1a938a301007",
	PrivateKey : pri,
	Balance : "1",
	Nonce : "210",
	Gas : "10",
	Type : "a64",
	Input : "ccaacc"
}
let transaction = new sdag.Signs.NewTransaction(pri,tx)
```
## Get transaction for broadcast
```
transaction.GetSignRawHexFull()
//
```

