var gulp = require('gulp');
var nodemon = require('gulp-nodemon');


gulp.task('startServer', function () {
  nodemon({script: 'app.js'});
});


gulp.task('default', ['startServer']);
