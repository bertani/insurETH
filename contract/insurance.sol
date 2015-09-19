contract Insurance {
  // logging helper
  event Log(uint k);
  
  address[5] public users_list;
  uint users_length;
  mapping (address => uint) public users_balance;
  
  // fallback function
  function(){
  }
  
  // registers a new user
  function register(){
    if (uint(msg.value) == 0) stop(); // you didn't send us any money
    if (users_length > 4) stop(); // supporting max 5 users for now
    if (users_balance[msg.sender]) stop(); // don't register twice!
    uint balance_busy = 0; // TODO: calculate actual balance_busy value
    if (uint(address(this).balance)-balance_busy < 5*uint(msg.value)) stop(); // don't have enough funds to cover your insurance
    // ORCALIZE CALL
    users_balance[msg.sender] = uint(msg.value);
    users_list[users_length] = msg.sender;
    users_length++;
  }
  
  // get the current user invested amount
  function get(){
    return users_balance[msg.sender];
  }
  
  // get a specific user invested amount
  function get_user(address user) returns (uint){
    return users_balance[user];
  }
  
  // returns percentage performance data about this investment
  function investment_ratio() returns (uint){
  }
}
