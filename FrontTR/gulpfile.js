'use strict';

const path = require('path')
const fs = require('fs');

const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const less = require('gulp-less');
const cssnano = require('gulp-cssnano');
const typescript = require('gulp-typescript');
const sequence = require('gulp-sequence')

const addrs = {
    scripts: path.join(__dirname, 'src/scripts/**/*.tsx'),
    styles: path.join(__dirname, 'src/styles/all.less'),
    temp: path.join(__dirname, 'src/temp'),
    builds: path.join(__dirname, 'files/builds')
};

function readTSconfig() {
    let config = fs.readFileSync('tsconfig.json', 'utf8');
    config = JSON.parse(config);
    return config;
}

gulp.task('ts-compile', function () {
    let tsconfig = readTSconfig();
    return gulp.src(addrs.scripts)
        .pipe(typescript(tsconfig))
        .pipe(gulp.dest(addrs.temp));
});

gulp.task('js-dev', function () {
    return gulp.src(addrs.temp + '/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(addrs.builds));
});

gulp.task('js-prod', function () {
    //
});

gulp.task('scripts-dev', sequence(['ts-compile', 'js-dev']));

gulp.task('scripts-prod', sequence(['ts-compile', 'js-prod']));

gulp.task('styles-dev', function () {
    return gulp.src(addrs.styles)
        .pipe(less())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(addrs.builds));
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
