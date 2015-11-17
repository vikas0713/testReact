var compressor = require('gulp-compressor');
var gulp = require('gulp');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var watchify = require('watchify');
var assign = require('object-assign');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var del = require('del');

var path = {
    distJs: './scripts/dist/js',
    jsx: './scripts/app.jsx',
    bundle: 'app.js',
}

gulp.task('js', function(){
    gulp.src('./scripts/dist/js/*.js')
        .pipe(compressor())
        .pipe(gulp.dest(path.distJs));
});


gulp.task('clean', function(cb){
    return del(['dist/js'], cb);
});


gulp.task('browserify', function(){
   browserify(path.jsx) 
    .transform(reactify)
    .bundle()
    .pipe(source(path.bundle))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(path.distJs))
});


gulp.task('watchify', function(){
    var bundler = watchify(browserify(path.jsx, watchify.args));
    
    function rebundle() {
        return bundler
            .bundle()
            .on('error', notify.onError())
            .pipe(source(path.bundle))
            .pipe(gulp.dest(path.distJs))
            .pipe(reload({stream: true}));
    }
    
    bundler.transform(reactify)
    .on('update', rebundle);
    return rebundle();
});


gulp.task('runserver', function(){
    browserSync({
        server:{
            baseDir: './',
            port: process.env.PORT || 5000,
        },
        port: process.env.port || 5000
    });
});


gulp.task('watch', function(){
   gulp.start(['runserver']); 
});