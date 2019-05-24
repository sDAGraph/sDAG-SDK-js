# Account

## Account initlize

```
const sdag = require("sdagsign")

const pri = "e7a3d2759c20e411516fe338bdd7121810dd131331550494bed4c80f070e621d"
let account = new sdag.Accounts.NewAccount(pri)
```
## Get account address
```
account.Address
//a3d5b73a8e19e763df8ed9eb3e97c78958d440fb
```
## Get account publickey
```
account.PublicKey
//a3d5b73a8e19e763df8ed9eb3e97c78958d440fb
```
