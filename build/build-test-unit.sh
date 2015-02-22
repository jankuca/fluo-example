
browserify="./node_modules/.bin/browserify"

spec_dirname="./test/"
globals_filename="./test/_globals.js"
output_filename="./app/test/tests.js"

find "$spec_dirname" -name "*.spec.js" |
    xargs "$browserify" -o "$output_filename" "$globals_filename"
