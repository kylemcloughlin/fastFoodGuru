class UsersController < ApplicationController
    def show 
    puts "#######show#########"
  end
  def create 
     puts "#######create#########"
     name = params[:user]
     pw = params[:password]
    city = params[:city]
    prov_or_state = params[:provOrState]
    country = params[:country]
    
     @user = User.new(
        name: name, 
        password: pw, 
        city: city, 
        prov_or_state: prov_or_state,
        country: country

     )
    render status: :ok if @user.save 
  end
end
