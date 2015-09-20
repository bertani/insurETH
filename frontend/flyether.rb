require_relative 'config/env'

class FlyEther < Sinatra::Application
  set :public_folder, '.'
  set :views, "#{APP_PATH}/views"

  get "/" do
    # genera indirizzo
    haml :index
  end

  post "/address" do
    content_type :json
    address = Geth.new_address
    if address
      { address: address }.to_json
    else
      { error: "cannot generate new address, geth account new output: '#{out}'" }.to_json
    end
  end

  # SSE - server sent events
  # POLL

  post "/" do
    raise params.inspect
    raise request.body.inspect
  end

  # jquery every 3 seconds call:

  get '/address/:address/balance' do |address|
    # TODO
    Ethereum.new(address).balance
  end

  # se balance cambiato: next step


  post "/contract/register" do
    # params:
    # address
    # flight_num
    # schedu
  end


  post "/contract/invest" do
    # params:
    # address
  end

  get "/invest" do
    haml :invest
  end

  get "/contracts/:id" do |id|
    @contract_id = id
    haml :contract
  end

  get "/playground" do
    haml :playground, layout: false
  end

  # web3.setProvider(new web3.providers.HttpProvider('http://flyether:8545')); var coinbase = web3.eth.coinbase;
end


# register
# | invest

# creiamo gli indirizzi
#
