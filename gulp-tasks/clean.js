/**
 * @license
 * Copyright (c) 2016 The GDG Madrid Authors. All rights reserved.
 * This code may only be used under the MIT style license found at http://gdgmadrid.com/LICENSE.txt
 */

'use strict';

const del = require('del');

// Returns a function that returns a Promise to delete directories
function clean(directories) {
  return function clean() {
    return del(directories);
  }
}

module.exports = clean;
