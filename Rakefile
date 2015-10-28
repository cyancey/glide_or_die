require './app'
require 'sinatra/activerecord/rake'
require 'babel/transpiler'

task :default do
  puts Dir.pwd
end

task :compile_game_jsx do
  transpiled_code_hash = Babel::Transpiler.transform File.read('public/javascripts/game_details_react.js')
  compiled_game_jsx_file = File.open('public/javascripts/game_details_react_compiled_jsx.js', 'w')
  compiled_game_jsx_file.puts transpiled_code_hash['code']
  compiled_game_jsx_file.close
end
