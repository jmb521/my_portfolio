class CreateResources < ActiveRecord::Migration[5.2]
  def change
    create_table :resources do |t|
      t.string :title
      t.string :url
      t.belongs_to :admin_user
      t.timestamps
    end
  end
end
