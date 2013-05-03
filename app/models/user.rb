class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  attr_accessor :login

  # Setup accessible (or protected) attributes for your model
  attr_accessible :username, :email, :password, :password_confirmation, :remember_me, :login
  # attr_accessible :title, :body

  ## FOLLOWING AND FOLLOWERS
  has_many :items

  has_many :followings, :foreign_key => "follower_id",
           :dependent => :destroy
  has_many :following, :through => :followings, :source => :followed

  has_many :reverse_relationships, :foreign_key => "followed_id",
           :class_name => "Following",
           :dependent => :destroy
  has_many :followers, :through => :reverse_relationships, :source => :follower

  ## LIKES
  has_many :likes
  has_many :liked_items, :through => :likes, :source => :item




  def self.find_first_by_auth_conditions(warden_conditions)
    conditions = warden_conditions.dup
    if login = conditions.delete(:login)
      where(conditions).where(["lower(username) = :value OR lower(email) = :value", { :value => login.downcase }]).first
    else
      where(conditions).first
    end
  end

  def following?(followed)
    followings.find_by_followed_id(followed)
  end

  def follow!(followed)
    followings.create!(:followed_id => followed.id)
  end

  def unfollow!(followed)
    followings.find_by_followed_id(followed).destroy
  end

  def likes
    self.liked_items
  end

end
