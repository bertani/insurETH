var run_contract = function() {

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
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "n",
          "type": "uint256"
        }
      ],
      "name": "notify",
      "type": "event"
    }
  ]

  // var abi = '[{"constant":false,"inputs":[],"name":"callback","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"deinvest","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"investors_list","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"users_list_length","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"RETURN","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"users_balance","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"investment_ratio","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"formula_1","type":"bytes1[]"},{"name":"formula_2","type":"bytes1[]"},{"name":"formula_3","type":"bytes1[]"},{"name":"formula_4","type":"bytes1[]"},{"name":"arrivaltime","type":"uint256"}],"name":"register","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"get","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"investors_list_length","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"}],"name":"get_user","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"users_list","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"investors_invested","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"invest","outputs":[],"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"k","type":"uint256"}],"name":"Log","type":"event"}]'

  var contract_address = '0xa1ba6548ef27df244e56fd5440f6e4979268d87f'


  var Insurance = web3.eth.contract(abi)

  var contract = Insurance.at(contract_address)

  // window.contract = contract;
  console.log(contract)

  var result = contract.get()
  console.log(Number(result))

  // var result = contract.set(1)
  // console.log(Number(result))

  var event = contract.notify()

  event.watch(function(error, result){
    if (!error) {
      console.log("watch:", result.args);
    }
  });
}


// eth.sendTransaction({from: '0x036a03fc47084741f83938296a1c8ef67f6e34fa', to: '0xa8ade7feab1ece71446bed25fa0cf6745c19c3d5', value: web3.toWei(1, "ether")})

// compiling contracts
//
// source = "contract test { function multiply(uint a) returns(uint d) { return a * 7; } }"
// contract = web3.eth.compile.solidity(source).test



//
// // send a transaction to a function
// contract.myStateChangingMethod('someParam1', 23, {value: 200, gas: 2000});
//
// // short hand style
// web3.eth.contract(abi).at(address).myAwesomeMethod("antani");
//
// // create filter
// var filter = contract.myEvent({a: 5}, function (error, result) {
//   if (!error)
//     console.log(result);
//     /*
//     {
//         address: '0x8718986382264244252fc4abd0339eb8d5708727',
//         topics: "0x12345678901234567890123456789012", "0x0000000000000000000000000000000000000000000000000000000000000005",
//         data: "0x0000000000000000000000000000000000000000000000000000000000000001",
//         ...
//     }
//     */
// });
