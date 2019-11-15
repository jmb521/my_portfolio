ActiveAdmin.register Blog do
# belongs_to :admin_user
  permit_params :admin_user_id, :title, :content_format, :content, tag_ids: []
  

  controller do
    def create
      # binding.pry
      @blog = Blog.new(:title => params[:blog][:title], :content_format => params[:blog][:content_format], :content => params[:blog][:content], :admin_user => current_admin_user)
      if @blog.save
        params[:blog][:tag_ids].each do |tag|
          if tag != ""
            
            @tag = Tag.find(tag)
            @blog.blog_tags.create(tag_id: @tag.id)

            @blog.save
          end
        end
        redirect_to(admin_blogs_path)
      end
    end
  end
  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  # permit_params 
  #
  # or
  #
  # permit_params do
  #   permitted = []
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  form do |f|
    f.inputs 'Blog Post' do
      f.input :title
      f.input :content_format
      f.input :content, as: :quill_editor, input_html: {data: {options: {modules: {toolbar: [['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'], ['link'],[{ 'header': 1 }, { 'header': 2 }], [{ 'list': 'ordered'}, { 'list': 'bullet' }],[{ 'script': 'sub'}, { 'script': 'super' }],      
      [{ 'indent': '-1'}, { 'indent': '+1' }], [{ 'size': ['small', false, 'large', 'huge'] }], [{ 'header': [1, 2, 3, 4, 5, 6, false] }], [{ 'color': [] }, { 'background': [] }], [{ 'font': [] }], [{ 'align': [] }],          
      [{ 'direction': 'rtl' }]]}, placeholder: 'Type something...', theme: 'snow'}}}
      # f.fields_for :tags do |t|
      #   t.input :name => "Tags:", :for => :name
      # end
      # f.input admin_user: current_admin_user, as: :hidden

      f.input :tags, :as => :check_boxes, :collection => Tag.all
      
    end
    
    f.actions
  end
end
