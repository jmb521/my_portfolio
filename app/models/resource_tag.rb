class ResourceTag < ApplicationRecord
    belongs_to :tag
    belongs_to :resource
end
