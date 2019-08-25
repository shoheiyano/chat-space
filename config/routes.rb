Rails.application.routes.draw do
  root to: 'groups#index'
  devise_for :users 
  resources :users
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:ndex, :create]
  end
end
