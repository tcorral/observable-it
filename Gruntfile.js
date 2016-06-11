module.exports = function (grunt) {
  grunt.initConfig({
    // Check code for mistakes or errors.
    jshint: {
      all: [
        'Gruntfile.js',
        'test/observable_test.js',
        'observable.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    // Before generating any new files, remove any previously-created files.
    clean: {
      generated: ['test/generated']
    },
    // Unit tests.
    qunit: {
      all: ['test/**/*.html']
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  grunt.registerTask('test', ['jshint', 'clean', 'qunit']);

  grunt.registerTask('default', ['test']);
};
