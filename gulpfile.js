// REQUIRED
var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    browserSync   = require('browser-sync').create(),
    uglify        = require('gulp-uglify'),
    plumber       = require('gulp-plumber'),
    autoprefixer  = require('gulp-autoprefixer'),
    sourcemaps    = require('gulp-sourcemaps'),
    concat        = require('gulp-concat'),
    del           = require('del'),
    rename        = require('gulp-rename'),
    babel         = require('gulp-babel'),
    imagemin      = require('gulp-imagemin');

// DEVELOPMENT TASKS
// Scripts Task - tasks related to js
gulp.task('scripts', function(){
  gulp.src(['process/js/**/*.js', '!process/js/**/*min.js'])
  .pipe(plumber())
  .pipe(babel({
            presets: ['es2015']
        }))
  .pipe(gulp.dest('builds/dev/js'))
  .pipe(browserSync.stream());
});


// Sass Task - development css - nested/readable/mapped
gulp.task('sassDev', function() {
  gulp.src('process/scss/**/*.scss')
  .pipe(plumber())
  .pipe(sourcemaps.init())
    .pipe(sass({sourceComments: 'map', sourceMap: 'sass', outputStyle: 'expanded'}))
    .pipe(autoprefixer('last 2 versions'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('builds/dev/css/'))
  .pipe(browserSync.stream());
});

// Server Task - Asynchronous browser syncing of assets across multiple devices
gulp.task('serve', function(){
  browserSync.init({
    proxy   : "http://localhost/sc-bourbon-boilerplate/builds/dev" // update this path to project root
  });

  gulp.watch('process/js/**/*.js', ['scripts']);
  gulp.watch('process/scss/**/*.scss', ['sassDev']);
  gulp.watch('**/*.html').on('change', browserSync.reload);
  gulp.watch('**/*.php').on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['serve']);


// PRODUCTIONS TASKS
// delete previous production build
gulp.task('prod:cleanfolder', function(){
  return del([
    'builds/prod/**/*'
  ]);
});

// minimize images
gulp.task('prod:imgMin', ['prod:cleanfolder'], function(){
    return gulp.src('builds/dev/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('builds/prod/img'));
});

// minify css
gulp.task('prod:sass', ['prod:cleanfolder'], function() {
  gulp.src('process/scss/style.scss')
  .pipe(plumber())
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(gulp.dest('builds/prod/css/'));
});

// uglify and mangle js
gulp.task('prod:scripts', ['prod:sass'], function(){
  gulp.src(['builds/dev/js/**/*.js'])
  .pipe(plumber())
  .pipe(uglify())
  .pipe(gulp.dest('builds/prod/js'));
});

// copy development files not requiring processing
gulp.task('prod:copy', ['prod:imgMin'], function(){
  return gulp.src([
                  'builds/dev/**/*/',
                  '!builds/dev/css{,/**}',
                  '!builds/dev/js{,/**}',
                  '!builds/dev/img{,/**}'
                ])
  .pipe(gulp.dest('./builds/prod'));
});

// remove unwanted build files and directories
gulp.task('prod:remove', ['prod:copy'], function(done){
  return del([  // list files and directories to delete
    // list of sneaky files to delete
    // 'builds/prod/target.xxx'
  ], done);
});

// main build task
gulp.task('prod', ['prod:cleanfolder', 'prod:imgMin', 'prod:sass', 'prod:scripts', 'prod:copy', 'prod:remove']);
