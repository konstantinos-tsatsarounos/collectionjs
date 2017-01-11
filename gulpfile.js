/**
 * Created by Konstantinos Tsatsarounos<konstantinos.tsatsarounos@gmail.com>
 * Project Name:
 * Filename: ${FILE_NAME}
 * Date: 11/1/2017
 * Time: 8:48 μμ
 */

var gulp = require('gulp');
var concat = require('gulp-concat');
var minifier = require('gulp-minify');

gulp.task('default', function () {
	gulp.src('src/*.js')
		.pipe( minifier() )
		.pipe( gulp.dest( 'dist/') );
});