import gulp from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import minifyCSS from "gulp-csso";
import del from "del";
import bro from "gulp-browserify";
import babelify from "babelify";

sass.compiler = require("node-sass");

const path = {
  styles: {
    src: "assets/scss/styles.scss",
    desc: "src/static/style",
    watch: "assets/scss/**/*.scss",
  },
  js: {
    src: "assets/js/main.js",
    desc: "src/static/js",
    watch: "assets/js/**/*.js",
  },
};
const clean = () => del(["src/static"]);
const styles = async () => {
  await gulp
    .src(path.styles.src)
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(minifyCSS())
    .pipe(gulp.dest(path.styles.desc));
};
const js = async () => {
  await gulp
    .src(path.js.src)
    .pipe(
      bro({
        transform: [
          babelify.configure({
            presets: ["@babel/preset-env"],
          }),
        ],
      })
    )
    .pipe(gulp.dest(path.js.desc));
};
const watchFiles = async () => {
  gulp.watch(path.styles.watch, styles);
  gulp.watch(path.js.watch, js);
};

const dev = gulp.series(clean, styles, js, watchFiles);
export const build = gulp.series(clean, styles, js);

export default dev;
