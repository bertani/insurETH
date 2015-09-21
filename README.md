# InsurETH

### Hack the Block London 2015 Hackathon
### Programmable Assets challenge

#### http://insureth.mkvd.net

next: insureth.org ?

Presentation (slides): http://mkvd.s3.amazonaws.com/apps/InsurEth.pdf

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

<http://localhost:3000>


you need also to host geth and modify the configs



## Backend

Geth

Install it, configure it and add some ethers to resolve the contract


run the server:

    geth --rpc --rpcaddr="YOUR_HOST" --rpcport="8080" --rpccorsdomain="*" --unlock=0
