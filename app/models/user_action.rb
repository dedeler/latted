class UserAction < ActiveRecord::Base
  attr_accessible :item_id, :user_action_type_id, :user_id

  belongs_to :user
  belongs_to :item
  belongs_to :user_action_type
end
