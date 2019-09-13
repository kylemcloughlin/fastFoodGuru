class ReviewsController < ApplicationController
  def new
  end
  def create
    puts "############CREATED REVIEW##########"
    @reviews = {"1" => 1, "2" => 2, "3" => 3, "4" => 4, "5" => 5}
    render json: @reviews
  end
  def destroy
  end
  def index 
    puts "############index##########"
    @reviews = {"1" => 1, "2" => 2, "3" => 3, "4" => 4, "5" => 5}
    render json: @reviews
  end
  def update
  end
  def edit
  end
  def show
  end
end
