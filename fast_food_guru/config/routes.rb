Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :reviews
    get 'reviews/index' => 'reviews#index'
    post 'review/create' => 'reviews#create'
    get 'user' => 'users#show'
    post 'user/new' => 'users#create'
    post 'session/create' => "sessions#create"
end
