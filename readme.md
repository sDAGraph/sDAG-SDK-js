# sDAG-SDK-js - sDAGraph JavaScript API


## Installation
``` bash
npm i sdagsign
```
## Usage
```

const sdag = require("sdagsign")

const pri = "e7a3d2759c20e411516fe338bdd7121810dd131331550494bed4c80f070e621d"
let account = new sdag.Accounts.NewAccount(pri)

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
transaction.GetSignRawHex().signature.toString("hex")

```
## Example

- [Generate Address and transaction](https://github.com/sDAGraph/sDAG-SDK-js/blob/master/docs/account.md)

## Contributing

- Follow the code style, we use 8 spaces as tabes

## Requirements

- Node.js
- npm


