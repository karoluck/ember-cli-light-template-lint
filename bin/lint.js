const linter = require('../lib/linter.js');
const options = require('cli').parse({
  dir: ['d', 'templates directory', 'dir', 'app/templates']
});

linter(options);
