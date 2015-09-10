     
require 'sinatra'
require 'pry'
require 'sinatra/reloader'
require 'httparty'
require 'pg'
require 'active_record'

get '/' do

  @movie_search = params[:movie_search] 
  @title = []

if params[:movie_search] && !params[:movie_search].empty?

    string = params[:movie_search].gsub " ","+"
    results = HTTParty.get("http://www.omdbapi.com/?s=#{string}")
    # binding.pry
    @title = results["Search"]

end


  erb :index
end





