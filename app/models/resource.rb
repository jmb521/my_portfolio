class Resource < ApplicationRecord
    belongs_to :admin_user
    has_many :resource_tags
    has_many :tags, through: :resource_tags
end
