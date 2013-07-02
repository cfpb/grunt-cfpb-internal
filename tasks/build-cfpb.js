/*
 * grunt-contrib-internal
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Tyler Kellen, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Add custom template delimiters.
  grunt.template.addDelimiters('build-cfpb', '{%', '%}');

  grunt.registerTask('build-cfpb', 'Generate CFPB README', function() {

    var path = require('path'),
        fs = require('fs'),
        asset = path.join.bind(null, __dirname, 'assets'),
        meta = grunt.file.readJSON('package.json');

    meta.changelog = grunt.file.readYAML('CHANGELOG');
    meta.license = grunt.file.read('LICENSE');

    // Generate readme.
    var tmpl = grunt.file.read( asset('README.tmpl.md') ),
        appendix = grunt.template.process( tmpl, {data: meta, delimiters: 'build-cfpb'} ),
        readme = grunt.file.exists('README.md') ? grunt.file.read('README.md') : '';

    // Remove release history and everything after from readme because we'll be re-adding it.
    // ([\s\n\r]*) selects any whitespace before the release history title.
    // ([\s\S]*) selects everything after the release history title.
    readme = readme.replace(/([\s\n\r]*)## Release History([\s\S]*)/ig, '');

    grunt.file.write( 'README.md', readme + appendix );
    grunt.log.ok('Created README.md');

    // Fail task if any errors were logged.
    if ( this.errorCount > 0 ) { return false; }
  });

};
