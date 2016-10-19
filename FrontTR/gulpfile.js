'use strict';

const path = require('path')
const fs = require('fs');

const gulp = require('gulp');
const concat = require('gulp-concat');
const less = require('gulp-less');
const cssnano = require('gulp-cssnano');
const typescript = require('gulp-typescript');

const addrs = {
    scripts: path.join(__dirname, 'src/scripts/**/*.tsx'),
    styles: path.join(__dirname, 'src/styles/all.less'),
    builds: path.join(__dirname, 'files/builds')
};

function readTSconfig() {
    let config = fs.readFileSync('tsconfig.json', 'utf8');
    config = JSON.parse(config);
    return config;
}

gulp.task('scripts-dev', function () {
    let tsconfig = readTSconfig();
    return gulp.src(addrs.scripts)
        .pipe(typescript(tsconfig))
        .pipe(gulp.dest(addrs.builds));
});

gulp.task('styles-dev', function () {
    return gulp.src(addrs.styles)
        .pipe(less())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(addrs.builds));
});

gulp.task('scripts-prod', function () {
    //
});

gulp.task('styles-prod', function () {
    return gulp.src(addrs.styles)
        .pipe(less())
        .pipe(concat('styles.min.css'))
        .pipe(cssnano())
        .pipe(gulp.dest(addrs.builds));
});

gulp.task('all-dev', ['scripts-dev', 'styles-dev']);

gulp.task('all-prod', ['scripts-prod', 'styles-prod']);
