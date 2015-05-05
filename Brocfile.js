/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  // Configuration is done through these options. Defaults are shown below
  icons: {
    // a path to your folder of svgs, or a Broccoli tree
    svgSources: 'app/styles/icons', 
    // a path to the CSS template
    // cssTemplate: // A default, bootstrap based template is bundled with this addon
    // the destination folder in your built app output
    dest: 'public/fonts'
  }
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = app.toTree();
