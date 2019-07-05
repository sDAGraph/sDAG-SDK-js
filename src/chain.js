const request = require('request');

class NewChain{
        constructor(ip){
                this.ip = ip
        }
        getTransaction(tx){
                let method = "/getTransaction"
                let link = this.ip+method+"?txid="+tx
                console.log(link)
                return PromiseFrame(link)
        }
        getBlockByHash(hash){
                let method = "/getBlock"
                let link = this.ip+method+"?blockhash="+hash
                return PromiseFrame(link)
        }
        getBlockByNumber(num){
                let method = "/getBlockbyID"
                let link = this.ip+method+"?blockID="+num
                return PromiseFrame(link)
        }
        getAccount(address){
                let method = "/getAccount"
                let link = this.ip+method+"?address="+address
                return PromiseFrame(link)
        }
        Broadcast(signResult){
                let method = "/broadcast"
                let link = this.ip + method
                return PostBroadcast(link,signResult);
        }
}

function PromiseFrame(link){
        return new Promise((resolve, reject) => {
                request(link, function (err, res, body) {
                        if(res && res.statusCode === 200){
                                resolve(JSON.parse(body))
                        }else{reject(error)}
                })
        })
}

function PostBroadcast(link, signResult){
        var options = {
                uri: link,
                method:'POST',
                json: signResult
        };
        return new Promise((resolve, reject) => {
                request(options, function(err,res,body){
                        if(res && res.statusCode === 200){
                                resolve(body)
                        }else{reject(error)}
                })
        });
}

module.exports = {NewChain}
