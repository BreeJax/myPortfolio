const gulp = require("gulp")
const browserSync = require("browser-sync").create()
const sass = require("gulp-sass")
const imagemin = require("gulp-imagemin")

//compiles sass
gulp.task("sass", function() {
  return gulp
    .src(["styles/*.scss"])
    .pipe(sass())
    .pipe(gulp.dest("styles/scss"))
    .pipe(browserSync.stream())
})

//watch and serve
gulp.task("serve", ["sass"], function() {
  browserSync.init({
    server: "."
  })
  gulp.watch(["styles/*.scss"], ["sass"])
  gulp.watch(["*.html"]).on("change", browserSync.reload)
})

//Default
gulp.task("default", ["serve"])

gulp.task("message", function() {
  return console.log("Gulp is running lovely!")
})

//gulp-src ///files to uppercase
//gulp.dest //to folder to output
//gulp.watch

gulp.task("imageMin", () =>
  gulp
    .src("./images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./images/min"))
)
