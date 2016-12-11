/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-light-template-lint',
  
  includedCommands: function() {
    return {
      'light-template-lint': require('./lib/commands/lint.js')
    };
  }
};
