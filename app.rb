require 'sinatra'
require 'sinatra/activerecord'
require './database_config'

class User < ActiveRecord::Base; end

get '/' do
  haml :index
end
