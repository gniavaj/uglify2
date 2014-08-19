var uglify = require('uglify-js');

var result = uglify.minify("./demo.js", {
    compress: true,
    mangle: false
});

console.log(result.code);