'use strict';

module.exports = function() {
  $.gulp.task('js:lint', function() {
    return $.gulp.src($.path.app)
      .pipe($.gp.eslint())
      .pipe($.gp.eslint.format())
      .pipe($.gp.eslint.failAfterError())
      .on('error', $.gp.notify.onError({
        title: 'JavaScript syntax error',
        message: "Error: <%= error.message %",
      }));
  })
};
