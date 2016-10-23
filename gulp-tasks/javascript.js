/**
 * @license
 * Copyright (c) 2016 The GDG Madrid Authors. All rights reserved.
 * This code may only be used under the MIT style license found at http://gdgmadrid.com/LICENSE.txt
 */

'use strict';

const uglify = require('gulp-uglify');

function minify() {
  return uglify();
}

module.exports = {
  minify: minify
};
