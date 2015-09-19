var init_ether = function() {
   web3.setProvider(new web3.providers.HttpProvider('http://flyether:8545'));

   // TODO: remove non useful code
   var coinbase = web3.eth.coinbase;
   var balance = web3.eth.getBalance(coinbase)
   console.log("balance", Number(balance))
   web3.eth.accounts[0]
}

var show_step = function(step) {
  $(".step_"+step).toggleClass("hidden")
  $("body").scrollTop(2000)
}

var dom = $(window)

var rates = {
  gbp_btc:  150,
  btc_eth:  271
}

var get_btc_gbp = function() {
  $.getJSON("https://bitpay.com/api/rates/gbp", function(data){
    rates.gbp_btc = data.rate
    dom.trigger("rates_updated")
  })
  $.getJSON("https://shapeshift.io/marketinfo/btc_eth", function(data){
    rates.btc_eth = data.rate
    dom.trigger("rates_updated")
  })
}

var update_insured_totals = function(evt){
  var value = evt.target.value || 200
  var value_btc = value/rates.gbp_btc
  $(".insure_amount_gbp").html(value)
  $(".insure_amount_btc").html(value_btc.toFixed(2))
  $(".insure_amount_eth").html((value_btc*rates.btc_eth).toFixed(1))
}

var do_insure = function() {
  $("input[name=flight_num], input[name=insure_amount]").attr("disabled", true)
  show_step(2)
}

var deposit_triggered = function() {
  show_step(3)
}

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
    }
  ]

  var contract_address = '0x22f05f34d9ef6ea8c672e688e838e7b9eee6ce89'

  var Insurance = web3.eth.contract(abi)

  var contract = Insurance.at(contract_address)

  console.log(contract)

  var result = contract.get()
  console.log(Number(result)) // '0x25434534534'
}

$(function(){
  var btc_gbp = get_btc_gbp()

  $("input[name=insure_amount]").on("mousemove", update_insured_totals)

  dom.on("rates_updated", update_insured_totals)

  $(".button.insure"      ).on("click", do_insure)
  $(".button.deposit-done").on("click", deposit_triggered)

  var account
  init_ether()

  console.log("accounts", account)

  $(".contract_number").html(account)

  run_contract()
})

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
