class SessionsController < ApplicationController
  def create 
    puts "#######create#######session#######"
    op = {1 => "WE", 2 => "did", 3 => "IT!"}
    render json: op
  end
end
