let gulp = require("gulp");
let sass = require("gulp-sass")(require("sass"));

gulp.task("compile", function () {
    return gulp
        .src("src/scss/main.scss")
        .pipe(sass())
        .pipe(gulp.dest("src/css"));
});

gulp.task("watch-scss", function () {
    gulp.watch("src/scss/main.scss", gulp.series("compile"));
});

gulp.task("default", gulp.series("compile", "watch-scss"), function () {});
