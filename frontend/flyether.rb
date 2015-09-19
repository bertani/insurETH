require 'sinatra'

class FlyEther < Sinatra::Application
  set :public_folder, '.'

  get "/" do
    haml :index
  end

  get "/contracts/:id" do |id|
    @contract_id = id
    haml :contract
  end

  # web3.setProvider(new web3.providers.HttpProvider('http://flyether:8545')); var coinbase = web3.eth.coinbase;
end
