class CreateItemCatalogs < ActiveRecord::Migration
  def change
    create_table :item_catalogs do |t|
      t.string :title
      t.integer :user_id

      t.timestamps
    end
  end
end
