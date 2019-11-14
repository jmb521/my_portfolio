ActiveAdmin.register Blog do

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
      
    end
    f.actions
  end
end
