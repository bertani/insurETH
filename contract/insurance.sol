contract Insurance {
  // logging helper
  event Log(uint k);

  address[5] public users_list;
  uint public users_length;
  mapping (address => uint) public users_balance;

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
    if (users_length > 4){ RETURN(); return; } // supporting max 5 users for now
    if (users_balance[msg.sender] > 0){ RETURN(); return; } // don't register twice!
    uint balance_busy = 0; // TODO: calculate actual balance_busy value
    if (uint(address(this).balance)-balance_busy < 5*uint(msg.value)){ RETURN(); return; } // don't have enough funds to cover your insurance
    // ORCALIZE CALL
    users_balance[msg.sender] = uint(msg.value);
    users_list[users_length] = msg.sender;
    users_length++;
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
    return 100;
  }
}            
