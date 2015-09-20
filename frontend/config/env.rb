require 'bundler'
Bundler.require
require 'json'

path = File.expand_path "../../", __FILE__
APP_PATH = path

# TODO: move in config/env
GETH_HOST = "localhost:8545"
# GETH_HOST = "v.mkvd.net:8080"


require_relative "../models/geth"
require_relative "../models/ethereum"
