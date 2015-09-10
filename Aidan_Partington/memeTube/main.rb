# https://gist.github.com/epoch/db6ab23117b25a119c1b

require 'pry'
require 'sinatra/reloader'     
require 'sinatra'
require 'pg'

get '/' do
  sql = 'SELECT * FROM memevideos;'
  @videos = run_sql(sql)

  erb :index
end



def run_sql
  db = PG.connect(:bdname => 'memevideo')
  rows = db.exec(sql)
  db.close
  return rows
end



