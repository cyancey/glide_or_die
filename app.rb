require 'sinatra'
require 'sinatra/activerecord'
require './database_config'

get '/' do
  haml :index
end
