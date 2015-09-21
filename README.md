# InsurETH
### Peer-to-peer insurance based on an Ethereum smart-contract

#### Hack the Block London 2015 Hackathon
#### Programmable Assets challenge Winner

#### http://insureth.mkvd.net (demo)

<a href="http://insureth.mkvd.net">
![](http://mkvphoto.s3.amazonaws.com/ethereum/insureth3.png)
</a>

next: insureth.org ?

Presentation (slides): http://mkvd.s3.amazonaws.com/apps/InsurEth.pdf

<a href="http://mkvd.s3.amazonaws.com/apps/InsurEth.pdf">
![](http://mkvphoto.s3.amazonaws.com/ethereum/slides_eth.png)
</a>

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
