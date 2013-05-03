class CreateUserActions < ActiveRecord::Migration
  def change
    create_table :user_actions do |t|
      t.integer :user_id
      t.integer :item_id
      t.integer :user_action_type_id

      t.timestamps
    end
  end
end
