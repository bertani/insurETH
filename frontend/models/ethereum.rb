class Web3

  # no time sorry -- shelling out to node
  def self.invest(address)
    puts `#{APP_PATH}/node/insureth.js #{address} invest`
  end

  def self.register(address)
    puts `#{APP_PATH}/node/insureth.js #{address}`
  end
end

class Ethereum

  attr_reader :address, :api

  def initialize(address)
    @address = address
    @api = API.new address: address
  end

  def balance
    api.balance
  end

  def invest(address)
    Web3.invest(address)
  end

  def register(address)
    Web3.register(address)
  end


  #  TODO: deploy
  def ctr_call(method, args)
    api.ctr_call method, args
  end

  def ctr_send(method, args)
    api.ctr_call method, args
  end

  class API # JSON RPC
    include HTTParty
    base_uri GETH_HOST
    # base_uri "http://localhost:3001"

    attr_reader :address

    def initialize(address:)
      @address = address
    end

    def balance
      resp = post m(:getBalance, address)
      int resp
    end

    def ctr_call(method, value=nil)
      # TODO: method
      data = call_data(value)
      puts "data: #{data}"
      puts "call: #{m(:call, data)}"
      resp = post_debug m(:call, data)
      puts resp.inspect
      puts resp
      puts resp.body
    end

    def ctr_send(method, value=nil)
      data = call_data(value).merge(
        gas: 1,
      )
      resp = post_debug m(:eth_sendTransaction, data)
    end

    private

    def call_data(value)
      data = {
        # from:
        to: "0x#{address}"
      }
      data[:value] = value if value
      data
    end

    def int(str)
      raise ArgumentError, "Can't cast a null hex to int" if !str || str == ""
      str.sub(/^0x/, '').to_i(16)
    end

    def post(body)
      result self.class.post "/",  body: body
    end

    # FIXME: refactor - catch exception - remove this method
    def post_debug(body)
      self.class.post "/",  body: body
    end

    def result(response)
      response["result"]
    end

    def m(method_name, params)
      {
        method: "eth_#{method_name}",
        params: [params, "latest"],
        jsonrpc: "2.0",
        id: 1,
      }.to_json
    end

    # curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getBalance","params":["b629da125151984035c736893972feb3637e71fb", "latest"],"id":1}' http://localhost:3001/


  end
end
