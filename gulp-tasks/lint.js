/**
 * @license
 * Copyright (c) 2016 The GDG Madrid Authors. All rights reserved.
 * This code may only be used under the MIT style license found at http://gdgmadrid.com/LICENSE.txt
 */

'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');

function lint(filesToLint) {
  return function lint() {
    return gulp.src(filesToLint)
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
  }
}

module.exports = lint;
