var path = require('path');

module.exports = {
    entry: {
        home: "./src/js/home",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist/js')
    }
};