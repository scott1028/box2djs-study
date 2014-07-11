// Generated on 2014-01-15 using generator-angular 0.7.1
'use strict';

module.exports = function (grunt) {
  // Define the configuration for all the tasks
  grunt.initConfig({
    wiredep: {
      target: {

        // Point to the files that should be updated when
        // you run `grunt wiredep`
        src: [
          'app/index.html'
        ],

        // Optional:
        // ---------
        cwd: '',
        dependencies: true,
        devDependencies: true,
        exclude: [],
        fileTypes: {},
        ignorePath: '',
        overrides: {}
      }
    }
  });

  grunt.loadNpmTasks('grunt-wiredep');

  grunt.registerTask('default', function(target) {
    'wiredep'
  });
};
