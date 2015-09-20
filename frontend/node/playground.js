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

//////////////


var web3 = require('web3')

// this file is for playground and test - please ignore it

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
var myContractInstance = MyContract.at('0xd226c05892b2d4b5b53297ada506415afccb9554');


console.log("contract", myContractInstance)


console.log("setting")

// to: user_address,

var data = {
  from: address,
  gas: 200000,
  value: 200
}

// var call_result = myContractInstance.users_list()
// console.log("call:", call_result)


var call_result = myContractInstance.invest.sendTransaction(data)
console.log("call:", call_result)




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
