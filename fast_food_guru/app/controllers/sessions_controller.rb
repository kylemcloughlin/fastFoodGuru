class SessionsController < ApplicationController
  def create 
    #### user auth may fake this until after css is implemented idk atm
    puts "#######create#######session#######"
    op = {1 => "WE", 2 => "did", 3 => "IT!"}
    render json: op
  end
  def delete
    puts "#######delete#######session#######"
    op = {1 => "WE", 2 => "did", 3 => "IT!"}
    render json: op
  end
end
