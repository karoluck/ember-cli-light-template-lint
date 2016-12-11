var linter = require('../linter.js');

module.exports = {
  name: 'light-template-lint',
  description: 'Light template linter.',
  works: 'insideProject',

  availableOptions: [{
    name: 'dir',
    type: String,
    aliases: ['d'],
    default: 'app/templates',
    description: "templates directory"
  }],
  
  run: function (options) {
    linter(options);
  }
}
