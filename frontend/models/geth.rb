class Geth
  def self.new_address
    new.new_address
  end

  def initialize

  end

  def new_address
    out = `geth --password #{APP_PATH}/config/password.txt account new`
    match = out.match /{(\w+)}/
    address = match && match[1]
  end
end
