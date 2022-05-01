# Local development

- `bundle exec nanoc view` shows the site
- `bundle exec nanoc compile -W` compile and watch for changes

## Deploy

1. `cd output`
1. Add diff to branch gh-pages
1. `bundle exec nanoc`
1. `bundle exec nanoc deploy`
