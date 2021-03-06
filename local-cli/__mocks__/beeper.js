/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
 'use strict';

// beeper@1.1.0 has a return statement outside of a function
// and therefore doesn't parse. Let's mock it so that we can
// run the tests.
module.exports = function () {};
