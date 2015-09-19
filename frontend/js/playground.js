// this file is for playground and test - please ignore it

var provider_host = 'http://flyether:8545'
// var provider_host = "http://v.mkvd.net:8080"

web3.setProvider(new web3.providers.HttpProvider(provider_host));

// var coinbase = web3.eth.coinbase;
// var balance = web3.eth.getBalance(coinbase)
// console.log("balance", Number(balance))

var abi = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "x",
        "type": "uint256"
      }
    ],
    "name": "set",
    "outputs": [],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "get",
    "outputs": [
      {
        "name": "retVal",
        "type": "uint256"
      }
    ],
    "type": "function"
  }
]

var MyContract = web3.eth.contract(abi);
var myContractInstance = MyContract.at('0x6050d3e60656be9baba236b74fdfda87bba2d374');


console.log(myContractInstance)

console.log("get:", Number(myContractInstance.get()))
