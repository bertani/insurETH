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
}
