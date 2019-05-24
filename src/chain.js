const request = require('request');

class NewChain{
        constructor(ip){
		this.ip = ip
	}
	getTransaction(tx){
		let method = "/getTransaction"
		let link = this.ip+method+"?txid="+tx
		console.log(link)
		return new Promise((resolve, reject) => {
			request(link, function (err, res, body) {
				if(res && res.statusCode === 200){
					resolve(JSON.parse(body))
				}else{reject(error)}
			})
		})
	}
	getBlockByHash(hash){
                let method = "/getBlock"
                let link = this.ip+method+"?blockhash="+hash
                return new Promise((resolve, reject) => {
                        request(link, function (err, res, body) {
                                if(res && res.statusCode === 200){
                                        resolve(JSON.parse(body))
                                }else{reject(error)}
                        })
                })
	}
        getBlockByNumber(num){
                let method = "/getBlockbyID"
                let link = this.ip+method+"?blockID="+num
                return new Promise((resolve, reject) => {
                        request(link, function (err, res, body) {
                                if(res && res.statusCode === 200){
                                        resolve(JSON.parse(body))
                                }else{reject(error)}
                        })
                })
        }
}
module.exports = {NewChain}

