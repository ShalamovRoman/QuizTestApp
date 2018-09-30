'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

var path = {
    build: {
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        uikit: {
          js: 'build/uikit/js/',
          css: 'build/uikit/css/',
          fonts: 'build/uikit/fonts/'
        },
        json: 'build/json/',
        fonts: 'build/fonts/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/*.js',
        less: 'src/less/*.less',
        img: 'src/img/**/*.*',
        uikit: {
          js: 'src/uikit/js/**/*.js',
          less: 'src/uikit/less/uikit.less',
          fonts: 'src/uikit/fonts/*.*'
        },
        json: 'src/json/*.json',
        fonts: 'src/fonts/*.*'
        // scss: 'src/scss/*.scss'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        less: 'src/less/**/*.less',
        // scss: 'src/scss/**/*.scss',
        img: 'src/img/**/*.*',
        uikit: {
          js: 'src/uikit/js/**/*.js',
          less: 'src/uikit/less/**/*.less',
          fonts: 'src/uikit/fonts/*.*'
        },
        json:'src/json/**/*.json',
        fonts:'src/fonts/**/*.*'
    },
    clean: './build'
};

var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
};

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

gulp.task('less:build', function () {
    gulp.src(path.src.less)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('scss:build', function () {
    gulp.src(path.src.scss)
        .pipe(sourcemaps.init())
        .pipe(sass({
            sourceMap: true,
            errLogToConsole: true
        }))
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

gulp.task('img:build', function() {
    gulp.src(path.src.img)
        .pipe(gulp.dest(path.build.img));
});

gulp.task('uikit:build:less', function () {
    gulp.src(path.src.uikit.less)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.uikit.css))
        .pipe(reload({stream: true}));
});

gulp.task('uikit:build:js', function () {
    gulp.src(path.src.uikit.js)
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.uikit.js))
        .pipe(reload({stream: true}));
});

gulp.task('uikit:build:fonts', function() {
    gulp.src(path.src.uikit.fonts)
        .pipe(gulp.dest(path.build.uikit.fonts));
});

gulp.task('json:build', function() {
    gulp.src(path.src.json)
        .pipe(gulp.dest(path.build.json));
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
});

gulp.task('build', [
    'html:build',
    'less:build',
    // 'scss:build',
    'js:build',
    'img:build',
    'uikit:build:less',
    'uikit:build:js',
    'uikit:build:fonts',
    'json:build',
    'fonts:build'
]);

gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.less], function(event, cb) {
        gulp.start('less:build');
    });
    // watch([path.watch.scss], function(event, cb) {
    //     gulp.start('scss:build');
    // });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb){
        gulp.start('img:build');
    });
    watch([path.watch.uikit.less], function(event, cb) {
        gulp.start('uikit:build:less');
    });
    watch([path.watch.uikit.js], function(event, cb) {
        gulp.start('uikit:build:js');
    });
    watch([path.watch.uikit.fonts], function(event, cb) {
        gulp.start('uikit:build:fonts');
    });
    watch([path.watch.json], function(event, cb){
        gulp.start('json:build');
    });
    watch([path.watch.fonts], function(event, cb){
        gulp.start('fonts:build');
    });
});

gulp.task('default', ['build', 'webserver', 'watch']);
