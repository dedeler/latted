class Item < ActiveRecord::Base
  attr_accessible :content, :item_category_id, :link, :store_id, :title, :user_id

  has_many :attachments
  has_many :user_actions
  has_many :actioned, :through => :user_actions, :source => :user
end
