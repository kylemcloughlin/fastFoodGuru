class ReviewsController < ApplicationController
  def create
    puts "############CREATED REVIEW##########"
    restaurant = params[:restaurant]
    lat = params[:lat]
    lng = params[:lng]
    review = params[:review]
    cs = params[:CS]
    cleanliness = params[:cleanliness]
    freshness = params[:freshness]
    quality = params[:quality]
    speed = params[:speed]
    average = params[:average]
    @user = User.find_by name: params[:user]
    
    @review =  Review.new(
      restaurant: restaurant, lat: lat, lng: lng, cs: cs, 
      cleanliness: cleanliness, freshness: freshness, 
      quality: quality, speed: speed,
      review: review, average: average, user_id: @user.id
    )
     
      @reviews = Review.all.order(average: :desc)
      render json: @reviews if @review.save 
  end
  def destroy
  end
  def index 
    puts "############index##########"
    @reviews = Review.all.order(average: :desc)
 
    render json: @reviews
  end
  def update
  end
  def edit
  end
  def show
  end
end
