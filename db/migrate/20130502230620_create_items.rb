class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :title
      t.string :link
      t.text :content
      t.integer :store_id
      t.integer :user_id
      t.integer :item_category_id

      t.timestamps
    end
  end
end
