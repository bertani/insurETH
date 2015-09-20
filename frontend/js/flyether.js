var init_ether = function() {
  // var provider_host = 'http://flyether:8545'
  var provider_host = "http://v.mkvd.net:8080"
  web3.setProvider(new web3.providers.HttpProvider(provider_host))

  // TODO: remove non useful code
  var coinbase = web3.eth.coinbase;
  var balance = web3.eth.getBalance(coinbase)
  console.log("balance", Number(balance))
  return web3.eth.accounts[0]
}

var show_step = function(step) {
  $(".step_"+step).removeClass("hidden")
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

var update_address = function() {
  var address = localStorage.eth_address
  $(".deposit_address").html(address)
  $(".deposit_qrcode" ).attr("src", "/qr_codes/"+address+".png")
}

var do_insure = function() {
  $("input[name=flight_num], input[name=insure_amount]").attr("disabled", true)
  show_step(2)
  watch_balance()
}

var get_balance = function(address, cb) {
  return function() {
    $.getJSON("/address/"+address+"/balance", function(data){
      cb(data)
    });
  }
}

var action_register = function(balance){
  var address = localStorage.eth_address
  console.log("register")
  $.post("/contracts/register", function(data){
    console.log("register done", data)
  })
}

var action_invest = function(balance){
  var address = localStorage.eth_address
  console.log("invest")
  $.post("/contracts/invest", function(data){
    console.log("invest done", data)
  })
}

var handle_balance_change = function(balance, callback) {
  var action = $("body").get(0).className
  var balance_changed = balance > 0
  balance_changed = true // TODO: comment
  if (balance_changed) {
    if (action == "register") {
      action_register(balance)
    } else if (action == "invest") {
      action_invest(balance)
    } else {
      console.error("error, action not recognized:", action)
    }
  } else {
    callback() // continue the watch
  }
}

var watch_balance = function() {
  var address = localStorage.eth_address
  var callback = function(data) {
    console.log("balance", data)
    handle_balance_change(data, function(){
      _.delay(get_balance(address, callback), 2000)
    })
  }
  _.delay(  get_balance(address, callback), 2000)
}

var deposit_triggered = function() {
  show_step(3)
}

var send_one = function(contract) {
  contract.set.sendTransaction(10, function(err, data) {
    console.log("sent_one", data)
  })
}

var generate_new_address = function() {
  if (!localStorage.eth_address) {
    $.post("/address", function(data){
      localStorage.eth_address = data.address
      dom.trigger("address_loaded")
    })
  } else {
    dom.trigger("address_loaded")
  }
}

$(function(){
  var btc_gbp = get_btc_gbp()

  $("input[name=insure_amount]").on("mousemove", update_insured_totals)

  dom.on("rates_updated", update_insured_totals)

  $(".button.insure"      ).on("click", do_insure)
  $(".button.deposit-done").on("click", deposit_triggered)

  var account
  account = init_ether()

  console.log("account", account)

  $(".contract_number").html(account)

  dom.on("address_loaded", update_address)

  generate_new_address()
})
