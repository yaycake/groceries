const { watch} = require('gulp')

const sass = require('./sass.js')

const watcher = () => {
    watch('./style/**/*.scss', {ignoreInitial: true}, sass)
}

exports.default = sass

exports.watch = watcher