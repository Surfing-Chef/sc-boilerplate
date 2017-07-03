// REQUIRED
var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps  = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    del = require('del'),
    rename = require('gulp-rename'),
    babel = require('gulp-babel'),
    imagemin = require('gulp-imagemin');

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
    proxy   : "http://localhost/app-root/app-file" // update this path to project root
  });

  gulp.watch('process/js/**/*.js', ['scripts']);
  gulp.watch('process/scss/**/*.scss', ['sassDev']);
  gulp.watch('**/*.html').on('change', browserSync.reload);
  gulp.watch('**/*.php').on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['serve']);

////////////////////////////////////////////////////////
// DEPLOYMENT TASKS
//////// Tasks used to build deployment package ////////
gulp.task('build:cleanfolder', function(){
  return del([
    './build/**/*'
  ]);
});

// create build directory for all theme deployment files
gulp.task('build:copy', ['build:cleanfolder'], function(){
  return gulp.src([
                  './**/*/',
                  '!./src/images/**/*',
                  '!./build'
                ])
  .pipe(gulp.dest('./build/'));
});

// minimize images in deployment directory
gulp.task('build:imgMin', ['build:copy'], function(){
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/src/images'));
});

// remove unwanted build files and directories
gulp.task('build:remove', ['build:imgMin'], function(done){
  return del([  // list files and directories to delete
    './build/gulpfile.js',
    './build/.git*',
    './build/node_modules',
    './build/README.md',
    './build/scss/',
    './build/css/',
    './build/css/*dev*',
  ], done);
});

// main build task
gulp.task('build', ['build:cleanfolder', 'build:copy', 'build:imgMin', 'build:remove']);
