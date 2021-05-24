#!/bin/bash
# Just publish the damn site
set -e

rm -rf output
git clone . output

cd output
git checkout --orphan gh-pages
git rm -rf .
git commit --m 'Create gh-pages branch' --allow-empty

git remote rm origin
git remote add origin git@github.com:sturmer/sturmer.github.io.git

bundle exec nanoc
git push --delete origin gh-pages
bundle exec nanoc deploy
