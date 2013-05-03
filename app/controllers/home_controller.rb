class HomeController < ApplicationController
  def index
    User.first.like_it(Item.first)


    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @items }
    end
  end
end
