var web3 = require('web3')

// this file is for playground and test - please ignore it

// var provider_host = 'http://flyether:8545'
// var provider_host = "http://v.mkvd.net:8080"
var provider_host = "http://v.mkvd.net:8080"

web3.setProvider(new web3.providers.HttpProvider(provider_host));

var coinbase = web3.eth.coinbase;
var main_address = coinbase
var balance = web3.eth.getBalance(main_address)

console.log("main address", Number(balance))

var address = "0xe0c105a89c738c505e8d5a9caea0ee6b3896e025"
var balance = web3.eth.getBalance(address)
console.log("address", Number(balance))
