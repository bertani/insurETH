require 'bundler'
Bundler.require
require 'json'

path = File.expand_path "../../", __FILE__
APP_PATH = path

env = ENV["RACK_ENV"] || "development"
APP_ENV = env

# TODO: move in config/env
GETH_HOST = if env == "development"
  "localhost:8545"
else
  "v.mkvd.net:8080"
end

GETH_PATH = if env == "development"
  "geth"
else
  "/home/www/bin/geth"
end


require_relative "../models/geth"
require_relative "../models/ethereum"
require_relative "../models/qr"
