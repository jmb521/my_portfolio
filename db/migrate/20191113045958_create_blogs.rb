class CreateBlogs < ActiveRecord::Migration[5.2]
  def change
    create_table :blogs do |t|
      t.string :title
      t.string :content_format
      t.string :content
      t.belongs_to :admin_user
      t.timestamps
    end
  end
end
