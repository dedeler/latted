class CreateAttachments < ActiveRecord::Migration
  def change
    create_table :attachments do |t|
      t.string :title
      t.text :description
      t.integer :attachable_id

      t.timestamps
      t.attachment :attach
    end
  end
end
