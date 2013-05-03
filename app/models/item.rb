class Item < ActiveRecord::Base
  attr_accessible :content, :item_category_id, :link, :store_id, :title, :user_id

  belongs_to :items

  has_many :likes
  has_many :liking_users, :through => :likes, :source => :user
end
