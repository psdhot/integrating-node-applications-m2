"use strict";

let gulp = require('gulp');
let jshint = require('gulp-jshint');

/*gulp.task('default', gulp.series('jshint','test','serve'));

gulp.task('jshint',()=>{
	return gulp.src('./*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
})
.task('test',()=>{
	require('./test.js');
})
.task('serve',()=>{
	require('./main.js');
});
*/

function lint() {
  return gulp.src('./*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
}

async function test() {
  await require('./test.js');
}

function serve() {
  require('./main.js');
}

exports.default = gulp.series(lint, test, serve);