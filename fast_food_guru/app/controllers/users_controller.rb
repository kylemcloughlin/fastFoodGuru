class UsersController < ApplicationController
    def show 
    puts "#######show#########"
  end
  def create 
     puts "#######create#########"
     name = params[:user]
     pw = params[:password]
     byebug
     @user = User.new( name: name, password: pw
     )
    render status: :ok if @user.save 
  end
end
