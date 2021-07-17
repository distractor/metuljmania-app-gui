npm run build &&
cd dist &&
git init &&
git add -A &&
git commit -m 'Deploy.' &&
git push -f git@github.com:distractor/metuljmania-application-gui.git master:gh-pages &&
cd -
