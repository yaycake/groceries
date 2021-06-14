const path = require('path')
var gulp = require('gulp')
var livereload = require('gulp-livereload');
gulp.task('watch', function() {
  livereload.listen({ basePath: 'dist' });
  gulp.watch('style');
  livereload.reload()
});


const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

// new route
app.get('/', (req, res) => {
//   res.send('Hello Worlds!')

  res.sendFile(path.join(__dirname, '/index.html'))
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


