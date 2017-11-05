# 


activate :contentful do |f|
  f.space = { website: 'dtr3t57nrpyu'}
  f.access_token = 'b072a17b401ec160ca2c8183f87901b962de05925402f85db5d0f966c0bf25d0'
  f.rebuild_on_webhook = true
  f.content_types = { 
    talentProfile: 'talentProfile', 
    contact: 'contact', 
    about: 'about', 
    creative: 'creative',
    projects: 'projects' 
  }
  f.cda_query = {order: 'sys.updatedAt' }
end

if data.respond_to? :website
  data.website.talentProfile.each do |id, talentProfile|
    proxy "profile/#{talentProfile.slug}.html", "profile/talent-detail.html", :locals => { :talentProfile => talentProfile }, :ignore => true
  end

  data.website.projects.each do |id, project|
    proxy "projects/#{project.slug}.html", "project/project-detail.html", :locals => { :talentProfile => project }, :ignore => true
  end
end

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

helpers do
  def markdown(text)
    Tilt['markdown'].new { text }.render
  end
end
# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

# configure :build do
#   activate :minify_css
#   activate :minify_javascript
# end
configure :build do
  activate :asset_hash
  activate :asset_host
  activate :gzip
  activate :minify_css
  activate :minify_javascript
  activate :relative_assets
end
