var gulp = require('gulp'),  //用来运行任务的
	connect = require('gulp-connect'),  //运行一个Web服务器  （运行react服务器）
	browserify = require('gulp-browserify'), //让所有组件拼接在一起   http://www.jianshu.com/p/tY6UPN
	concat = require('gulp-concat'),  //文件合并插件
	port = process.env.port || 5000;  // 是上面connect的端口    命令指定端口号

gulp.task('browserify',function(){
	gulp.src('./app/js/main.js')
	.pipe(browserify({
		transform: 'reactify',
	}))
	.pipe(gulp.dest('./dist/js'))
});

// live reload 
gulp.task('connect',function(){
	connect.server({
		// root:'./',
		port: port,
		livereload: true,
	})
})

// reload Js  压缩js
gulp.task('js',function(){
	gulp.src('./dist/**/*.js')
	.pipe( connect.reload() )
})

gulp.task('html',function(){
	gulp.src('./app/**/*.html')
	.pipe( connect.reload() )
});

gulp.task('watch',function(){
	gulp.watch('./dist/**/*.js',['js']);
	gulp.watch('./app/**/*.html',['html']);
	gulp.watch('./app/js/**/*.js',['browserify']);
})

gulp.task('default',['browserify']);   //默认

gulp.task('serve',['browserify','connect','watch']);  //开发的时候  gulp serve