class Ethereum

  attr_reader :address, :api

  def initialize(address)
    @address = address
    @api = API.new address: address
  end

  def balance
    api.balance
  end

  def call
    api.call
  end

  def send
    api.call
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

    def call(value=nil)
      data = call_data(value)
      resp = post m(:call, data)
    end

    def send(value=nil)
      data = call_data(value).merge(
        gas: 1,
      )
      resp = post m(:eth_sendTransaction, data)
    end

    private

    def call_data(value)
      data = {
        # from:
        to: "0xaddress"
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
