class Tag < ApplicationRecord
    has_many :blog_tags
    has_many :blogs, through: :blog_tags
    has_many :resource_tags
    has_many :resources, through: :resource_tags
end
