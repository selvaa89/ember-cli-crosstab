/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-crosstab',
  init: function(name) {
    this._super.init && this._super.init.apply(this, arguments);

    var assets_path = require('path').join('crosstab','src','crosstab.js');
    this.treePaths['vendor'] = require.resolve('crosstab').replace(assets_path, '');
  },
  included: function(app) {
    var options = this.app.options.crossTabOptions || {enabled: true};
    if (options.enabled) {
      this.app.import('vendor/crosstab/src/crosstab.js');
    }
  }
};