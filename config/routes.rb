Rails.application.routes.draw do
  devise_for :users
  resources :posts do
    resources :comments
  end
  
  root 'ginlovers#index'
  get 'forum' => 'posts#index'
end
