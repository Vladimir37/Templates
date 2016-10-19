var path = require('path')

const gulp = require('gulp');
const concat = require('gulp-concat');
const less = require('gulp-less');
const cssnano = require('gulp-cssnano');
const typescript = require('gulp-typescript');

const addrs = {
    scripts: path.join(__dirname, 'src/scripts'),
    styles: path.join(__dirname, 'src/styles/all.less'),
    builds: path.join(__dirname, 'files/builds')
};

gulp.task('scripts-dev', function () {
    //
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
