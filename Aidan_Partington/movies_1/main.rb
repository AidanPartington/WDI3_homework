     
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do

  movie_name = params[:movie_name]

  if "#{params[:movie_name]}" && !"#{params[:movie_name]}".empty?

    url = "http://www.omdbapi.com/?t=#{params[:movie_name]}"

    @result = HTTParty.get(url)
    
    @movie_title = @result['Title']
    @movie_genre = @result['Genre']
    @movie_plot = @result['Plot']
    @movie_img = @result['Poster']

  end

  erb :index
end

# result = YahooFinance::get_quotes(YahooFinance::StandardQuote, @stock_name)

# require 'sinatra/reloader'
# require 'sinatra'
# require 'pry'
# require 'httparty'

# get '/' do

#     url = "http://www.omdbapi.com/?t=#{params[:movie_title]}"

#     if "#{params[:movie_title]}" && !"#{params[:movie_title]}".empty?
#       @details = HTTParty.get(url) 
#       @image = @details["Poster"]
#     end

#   erb :index


# end





