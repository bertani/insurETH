require_relative 'config/env'

class FlyEther < Sinatra::Application
  set :public_folder, '.'
  set :views, "#{APP_PATH}/views"

  helpers do
    def body_class
      request.path.split("/")[1] || "register"
    end
  end

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

  get '/address/:address/balance' do |address|
    content_type :json
    balance = Ethereum.new(address).balance
    { balance: balance }.to_json
  end

  # se balance cambiato: next step

  post "/contracts/register" do
    # TODO: !! .new(address)

    # TODO: scheduled_at?
    scheduled_at = "2015-10-20 00:00"
    args = {
      address:      params[:address],
      flight_num:   params[:flight_num],
      scheduled_at: scheduled_at
    }
    Ethereum.new(address).call :register, args
  end

  post "/contracts/invest" do
    args = {
      address:      params[:address],
    }
    Ethereum.new(address).call :register, args
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

end
