# Local development

`nanoc live` compiles the site and serves it, listening for changes. 

Note that `bundle exec nanoc live` uses the same `nanoc` executable.

## Deploy

What is deployed is whatever is added to the branch `gh-pages` in the `output` directory.
After the initial setup, this is automatic, so just:
1. cd to output
2. verify you're on gh-pages branch
3. commit the changes
4. push

If any problems, just nuke everything and follow the [setup docs](https://nanoc.app/doc/deploying/#with-git).
