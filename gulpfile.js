var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', [ 'sass' ], function(){
  browserSync.init({
    // server: './_site'
    server: '.',
    directory: true
  });

  gulp.watch('scss/*.scss', [ 'sass' ]);
  // gulp.watch('./_site/*.html')
  gulp.watch('./index.html')
    .on('change', browserSync.reload);
  gulp.watch('js/*.js')
    .on('change', browserSync.reload);
});

gulp.task('sass', function(){
  var sass = require('gulp-sass');

  return gulp.src('scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
});

gulp.task('default', [ 'serve' ]);
