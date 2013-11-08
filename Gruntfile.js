/*
 * grunt-contrib-internal
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Tyler Kellen, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    /**
     * JSHint: https://github.com/gruntjs/grunt-contrib-jshint
     * 
     * Validate files with JSHint.
     */
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    /**
     * Docco: https://github.com/DavidSouther/grunt-docco
     * 
     * Grunt Docco plugin.
     */
    docco: {
      js: {
        src: ['tasks/build-cfpb.js'],
        options: {
          output: 'docs/'
        }
      }
    },

    /**
     * Nodeunit: https://github.com/gruntjs/grunt-contrib-nodeunit
     * 
     * Run Nodeunit unit tests.
     */
    nodeunit: {
      all: ['test/**/*_test.js']
    },

    'build-cfpb': {
      prod: {
        options: {
          commit: true,
          tag: true
        }
      },
      test: {
        options: {
          dir: 'test/tmp/',
          commit: false,
          tag: false
        }
      }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-docco');

  grunt.registerTask('test', ['nodeunit']);
  grunt.registerTask('build', ['build-cfpb:prod', 'docco']);
  grunt.registerTask('default', ['jshint']);

};
