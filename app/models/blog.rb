class Blog < ApplicationRecord
    belongs_to :admin_user
    has_many :blog_tags
    has_many :tags, through: :blog_tags
    # accepts_nested_attributes_for :tags
end
