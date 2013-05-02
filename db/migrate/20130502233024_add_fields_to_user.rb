class AddFieldsToUser < ActiveRecord::Migration
  def change
    add_column :users, :username, :string
    add_column :users, :followers, :integer
    add_column :users, :follows, :integer
    add_column :users, :likes, :integer
    add_column :users, :owns, :integer
    add_column :users, :wants, :integer
  end
end
