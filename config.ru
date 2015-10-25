require 'dotenv'
Dotenv.load

require 'rubygems'
require 'sinatra'
require './app.rb'

if ENV['ENVIRONMENT'] == 'development'
  `rake compile_game_jsx`
end

run Sinatra::Application
