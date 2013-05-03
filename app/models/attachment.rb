class Attachment < ActiveRecord::Base
  attr_accessible :description, :title, :version, :attachable_id, :attachable_type, :attach
  has_attached_file :attach, :styles => { :large => '950x400#', :medium => "250x200#", :small => "100x100>" }

  belongs_to :item, :foreign_key => "attachable_id"
end
