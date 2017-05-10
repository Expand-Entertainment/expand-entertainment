set :markdown, parse_block_html: true
activate :contentful do |f|
  f.space = { website: 'dtr3t57nrpyu'}
  f.access_token = ENV['CONTENTFUL_API_KEY']
  f.rebuild_on_webhook = true
  f.content_types = { talentProfile: 'talentProfile', contact: 'contact', about: 'about', creative: 'creative' }
end

if data.respond_to? :website
  data.website.talentProfile.each do |id, talentProfile|
    proxy "profile/#{talentProfile.slug}.html", "profile/talent-detail.html", :locals => { :talentProfile => talentProfile }, :ignore => true
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

# helpers do
#   def some_helper
#     'Helping'
#   end
# end

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
