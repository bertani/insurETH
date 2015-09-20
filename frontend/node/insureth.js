var abi = [
 {
 "constant": false,
 "inputs": [],
 "name": "callback",
 "outputs": [],
 "type": "function"
 },
 {
 "constant": false,
 "inputs": [
 {
 "name": "formula_1a",
 "type": "bytes1[]"
 },
 {
 "name": "flight_number",
 "type": "bytes1[]"
 },
 {
 "name": "formula_3a",
 "type": "bytes1[]"
 },
 {
 "name": "formula_4a",
 "type": "bytes1[]"
 },
 {
 "name": "formula_4b",
 "type": "bytes1[]"
 },
 {
 "name": "arrivaltime",
 "type": "uint256"
 }
 ],
 "name": "register",
 "outputs": [],
 "type": "function"
 },
 {
 "constant": false,
 "inputs": [],
 "name": "deinvest",
 "outputs": [],
 "type": "function"
 },
 {
 "constant": true,
 "inputs": [
 {
 "name": "",
 "type": "uint256"
 }
 ],
 "name": "investors_list",
 "outputs": [
 {
 "name": "",
 "type": "address"
 }
 ],
 "type": "function"
 },
 {
 "constant": true,
 "inputs": [],
 "name": "users_list_length",
 "outputs": [
 {
 "name": "",
 "type": "uint256"
 }
 ],
 "type": "function"
 },
 {
 "constant": false,
 "inputs": [],
 "name": "RETURN",
 "outputs": [],
 "type": "function"
 },
 {
 "constant": true,
 "inputs": [
 {
 "name": "",
 "type": "address"
 }
 ],
 "name": "users_balance",
 "outputs": [
 {
 "name": "",
 "type": "uint256"
 }
 ],
 "type": "function"
 },
 {
 "constant": false,
 "inputs": [],
 "name": "investment_ratio",
 "outputs": [
 {
 "name": "",
 "type": "uint256"
 }
 ],
 "type": "function"
 },
 {
 "constant": false,
 "inputs": [],
 "name": "get",
 "outputs": [
 {
 "name": "",
 "type": "uint256"
 }
 ],
 "type": "function"
 },
 {
 "constant": true,
 "inputs": [],
 "name": "investors_list_length",
 "outputs": [
 {
 "name": "",
 "type": "uint256"
 }
 ],
 "type": "function"
 },
 {
 "constant": false,
 "inputs": [
 {
 "name": "user",
 "type": "address"
 }
 ],
 "name": "get_user",
 "outputs": [
 {
 "name": "",
 "type": "uint256"
 }
 ],
 "type": "function"
 },
 {
 "constant": true,
 "inputs": [
 {
 "name": "",
 "type": "uint256"
 }
 ],
 "name": "users_list",
 "outputs": [
 {
 "name": "",
 "type": "address"
 }
 ],
 "type": "function"
 },
 {
 "constant": true,
 "inputs": [
 {
 "name": "",
 "type": "address"
 }
 ],
 "name": "investors_invested",
 "outputs": [
 {
 "name": "",
 "type": "uint256"
 }
 ],
 "type": "function"
 },
 {
 "constant": false,
 "inputs": [],
 "name": "invest",
 "outputs": [],
 "type": "function"
 },
 {
 "anonymous": false,
 "inputs": [
 {
 "indexed": false,
 "name": "k",
 "type": "uint256"
 }
 ],
 "name": "Log",
 "type": "event"
 }
]


// update the right abi
//
//////////////

// configs

var contract_address = "0x88d675e08b053404209e6b0461a1b648592cfbaa"

//

var address = process.argv.slice(2)[0]

console.log("args")
console.log("address", address)

var web3 = require('web3')

// var provider_host = 'http://flyether:8545'
// var provider_host = "http://v.mkvd.net:8080"
var provider_host = "http://v.mkvd.net:8080"

web3.setProvider(new web3.providers.HttpProvider(provider_host));

var coinbase = web3.eth.coinbase;
var main_address = coinbase

var user_address = "0xe0c105a89c738c505e8d5a9caea0ee6b3896e025"

var address = main_address
// var address = "0xe0c105a89c738c505e8d5a9caea0ee6b3896e025"

var balance = web3.eth.getBalance(address)
console.log("address", address)
console.log("balance", Number(balance))


var MyContract = web3.eth.contract(abi);
var myContractInstance = MyContract.at(contract_address);


console.log("contract", myContractInstance)


console.log("setting")

// to: user_address,



// var call_result = myContractInstance.users_list()
// console.log("call:", call_result)


// TODO: GET PARAM[1] to REGISTER

// INVEST
// var data = {
//   from: address,
//   gas: 200000,
//   value: 100
// }
// var call_result = myContractInstance.invest.sendTransaction(data)
// console.log("call:", call_result)

// process.stdout.write("successful\n")
// process.stdout.write("OK\n")
// console.log("successful\n")
// console.log("OK\n")
// process.exit(0)


// DON'T Send it!


// REGISTER
var data = {
  from: address,
  gas: 200000,
  value: 10,
}



// console.log(myContractInstance.register)

// [91, 87, 111, 108, 102, 114, 97, 109, 93, 32, 39]

// var call_result = myContractInstance.register.sendTransaction(["[Wolfram] ", "'temperature in london' ", "", "< 10", "> 10", 0], data)

// var call_result = myContractInstance.register.sendTransaction([91, 87, 111, 108, 102, 114, 97, 109, 93, 32, 39],[],[],[],[], 0, data)

// UI TEST HERE
// process.exit(0)


// semi- HARDCODED REGISTER

var data = { data: "0x1323af4000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000140000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000001c000000000000000000000000000000000000000000000000000000000000001c800000000000000000000000000000000000000000000000000000000000000015b576f6c6672616d5d2000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000127414131323320000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001666c69676874206c616e6465642720000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013d2027547275652700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013d202746616c7365270000000000000000000000000000000000000000000000",
from: "0x0462838f4e30223d51310c9725c51217481141c2",
to: contract_address,
gas: 200000,
value: "0x1" }
var call_result = web3.eth.sendTransaction(data)

console.log("call:", call_result)

// rush programming
process.stdout.write("successful\n")
process.stdout.write("OK\n")
console.log("successful\n")
console.log("OK\n")
process.exit(0)







// process.stdout.write("antani")

// geth --rpc --rpccorsdomain "http://flyether:3001" --password /home/makevoid/apps/hacktheblock/frontend/config/password.txt --unlock "0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18"




// console.log("get:", Number(myContractInstance.get()))
//
// console.log("set:", myContractInstance.set)
//
// myContractInstance.set.sendTransaction(2, data)
//
// console.log("should be set now \n")
//
// console.log("get:", Number(myContractInstance.get()))



// myContractInstance.set.sendTransaction(param1, param2 ...,  {object}, callback)
