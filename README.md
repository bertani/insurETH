#

http://insureth.org

### Hack the Block London 2015 Hackathon
### Programmable Assets challenge


## Frontend

prereqs:


ruby required

node required

### Install dependencies

    bower install
    bundle

### Run app

    rackup

then connect to:

http://localhost:3000


you need also to host geth and modify the configs



## Backend

Geth

Install it, configure it and add some ethers to resolve the contract


run the server:

geth --rpc --rpcaddr="v.mkvd.net" --rpcport="8080" --rpccorsdomain="*" --unlock=0
