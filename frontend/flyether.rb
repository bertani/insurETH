require 'sinatra'

class FlyEther < Sinatra::Application
  set :public_folder, '.'

  get "/" do
    send_file "./index.html"
  end

  # web3.setProvider(new web3.providers.HttpProvider('http://flyether:8545')); var coinbase = web3.eth.coinbase;
end
