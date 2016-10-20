'use strict';

const path = require('path')
const fs = require('fs');

const gulp = require('gulp');
const webpack = require('gulp-webpack');
const concat = require('gulp-concat');
const less = require('gulp-less');
const cssnano = require('gulp-cssnano');
const typescript = require('gulp-typescript');
const sequence = require('gulp-sequence')

const TSconfig = require('./tsconfig.json');
const WPconfigDev = require('./webpack.dev.config.js');
const WPconfigProd = require('./webpack.prod.config.js');

const addrs = {
    scripts: path.join(__dirname, 'src/scripts/**/*.tsx'),
    styles: path.join(__dirname, 'src/styles/all.less'),
    temp: path.join(__dirname, 'src/temp'),
    builds: path.join(__dirname, 'files/builds')
};

gulp.task('ts-compile', function () {
    return gulp.src(addrs.scripts)
        .pipe(typescript(TSconfig))
        .pipe(gulp.dest(addrs.temp));
});

gulp.task('js-dev', function () {
    return gulp.src(addrs.temp + 'index.js')
        .pipe(webpack(WPconfigDev))
        .pipe(gulp.dest(addrs.builds));
});

gulp.task('js-prod', function () {
    return gulp.src(addrs.temp + 'index.js')
        .pipe(webpack(WPconfigProd))
        .pipe(gulp.dest(addrs.builds));
});

gulp.task('scripts-dev', sequence('ts-compile', 'js-dev'));

gulp.task('scripts-prod', sequence('ts-compile', 'js-prod'));

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
