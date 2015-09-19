contract Insurance {
  // logging helper
  event Log(uint k);

  address[5] public users_list;
  uint public users_list_length;
  mapping (address => uint) public users_balance;
  
  address[5] public investors_list;
  uint public investors_list_length;
  mapping (address => uint) public investors_invested;

  // fallback function
  function(){
  }

  // just a function to send the funds back to the sending address
  function RETURN(){
    msg.sender.send(msg.value);
  }

  // registers a new user
  function register(){
    if (uint(msg.value) == 0) return; // you didn't send us any money
    if (users_list_length > 4){ RETURN(); return; } // supporting max 5 users for now
    if (users_balance[msg.sender] > 0){ RETURN(); return; } // don't register twice!
    uint balance_busy = 0;
    for (uint k=0; k<users_list_length; k++){
        balance_busy += 5*users_balance[users_list[k]];
    }
    if (uint(address(this).balance)-balance_busy < 5*uint(msg.value)){ RETURN(); return; } // don't have enough funds to cover your insurance
    // ORCALIZE CALL
    users_balance[msg.sender] = uint(msg.value);
    users_list[users_list_length] = msg.sender;
    users_list_length++;
  }
  
  // invest new funds
  function invest() {
    if (investors_invested[msg.sender] == 0){
      investors_list[investors_list_length] = msg.sender;
      investors_list_length++;
    }
    investors_invested[msg.sender] += uint(msg.value);
  }
  
  // deinvest funds
  function deinvest(){
    if (investors_invested[msg.sender] == 0) return;
    uint balance_busy = 0;
    for (uint k=0; k<users_list_length; k++){
      balance_busy += 5*users_balance[users_list[k]];
    }
    uint invested_total = 0;
    for (k=0; k<investors_list_length; k++){
      invested_total += investors_invested[investors_list[k]];
    }
    uint gain = investors_invested[msg.sender] / invested_total * (uint(address(this).balance) - balance_busy);
    if (gain > uint(address(this).balance)-balance_busy) return; // do not let the investor deinvest in the case it is busy
    msg.sender.send(gain);
    investors_invested[msg.sender] = 0;
    for (k=0; k<investors_list_length; k++){
      if (investors_list[k] == msg.sender) investors_list[k] = 0x0;
    }
  }
  
  // get the current user insured amount
  function get() returns (uint){
    return users_balance[msg.sender];
  }

  // get a specific user insured amount
  function get_user(address user) returns (uint){
    return users_balance[user];
  }

  // returns percentage performance data about this investment
  function investment_ratio() returns (uint){
    uint insured_customers_funds = 0;
    for (uint k=0; k<users_list_length; k++){
      insured_customers_funds += users_balance[users_list[k]];
    }
    uint invested_total = 0;
    for (k=0; k<investors_list_length; k++){
      invested_total += investors_invested[investors_list[k]];
    }
    uint ratio = 100 * ((uint(address(this).balance) - insured_customers_funds)/invested_total);
    return ratio;
  }
}                      
