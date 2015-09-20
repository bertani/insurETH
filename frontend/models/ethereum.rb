class Ethereum

  attr_reader :address, :api

  def initialize(address)
    @address = address
    @api = API.new address: address
  end

  def balance
    api.balance
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
      int post m(:getBalance)
    end

    private

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

    def m(method_name)
      {
        method: "eth_#{method_name}",
        params: ["#{address}", "latest"],
        jsonrpc: "2.0",
        id: 1,
      }.to_json
    end

    # curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getBalance","params":["b629da125151984035c736893972feb3637e71fb", "latest"],"id":1}' http://localhost:3001/


  end
end
