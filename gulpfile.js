var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', [ 'sass' ], function(){
  browserSync.init({
    server: './'
  });

  gulp.watch('scss/**/*.scss', [ 'sass' ]);
  gulp.watch('**/*.html').on('change', browserSync.reload);
  gulp.watch('js/**/*.js').on('change', browserSync.reload);
});

gulp.task('sass', function(){
  var sass = require('gulp-sass');

  gulp.src('scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('css/'))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(browserSync.stream());
});
