require 'dotenv'
Dotenv.load

require 'rubygems'
require 'sinatra'
require './app.rb'

if ENV['RACK_ENV'] == 'development'
  `rake compile_game_jsx`
end

run Sinatra::Application
