ActiveAdmin.register Resource do
  permit_params :title, :url, :admin_user_id, tag_ids: []

  controller do
    def create
      @resource = Resource.new(:title => params[:resource][:title], :url => params[:resource][:url], admin_user: current_admin_user)
      params[:resource][:tag_ids].each do |tag|
        @resource.tags << Tag.find(tag) unless tag == ""
      end
      if @resource.save 
        redirect_to admin_resources_path
      end
    end
  end
  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  # permit_params :title, :url, :admin_user_id
  #
  # or
  #
  # permit_params do
  #   permitted = [:title, :url, :admin_user_id]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  form do |f|
    f.inputs 'Resource' do
      f.input :title
      f.input :url
      f.input :tags, :as => :check_boxes, :collection => Tag.all
      
    end
    
    f.actions
  end
  
  
end
