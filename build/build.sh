
browserify="./node_modules/.bin/browserify"

output_filename="./app/build/app.js"

"$browserify" -e "./app/js/main.js" -o "$output_filename"
