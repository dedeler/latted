class CreateUserActionTypes < ActiveRecord::Migration
  def change
    create_table :user_action_types do |t|
      t.string :name

      t.timestamps
    end
  end
end
