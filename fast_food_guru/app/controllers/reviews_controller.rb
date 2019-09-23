class ReviewsController < ApplicationController
  def create
    puts "############CREATED REVIEW##########"
    restaurant  = params[:restaurant]
    lat = params[:lat]
    lng = params[:lng]
    review = params[:review]
    
    @user = User.find_by name:params[:user]
    
    @review =  Review.new(
      restaurant: restaurant, lat: lat, lng: lng, 
      review: review, user_id: @user.id
    )
     
      @reviews = Review.all.order(created_at: :desc)
      render json: @reviews if @review.save 
  end
  def destroy
  end
  def index 
    puts "############index##########"
    @reviews = Review.all.order(created_at: :desc)
 
    render json: @reviews
  end
  def update
  end
  def edit
  end
  def show
  end
end
