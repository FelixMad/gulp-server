'use strict';
var  gulp      = require('gulp'),
	 gls       = require('gulp-live-server'),
	 $src      = "source",
	 $port     = 3012;


gulp.task('server', function() {
	var server = gls.static($src, $port);
	server.start();
	console.log('Localhost en http://localhost:' + $port);
});
