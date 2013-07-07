/*
 * grunt-cfpb-internal
 * http://consumerfinance.gov
 *
 * Based on grunt-contrib-less
 * http://gruntjs.com
 * Copyright (c) 2012 Tyler Kellen, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Add custom template delimiters.
  grunt.template.addDelimiters('build-cfpb', '{%', '%}');

  grunt.registerTask('build-cfpb', 'Generate CFPB README', function() {

    var path = require('path'),
        asset = path.join.bind(null, __dirname, 'assets'),
        meta = grunt.file.readJSON('package.json');

    // Read changelog YAML
    if ( !grunt.file.exists('CHANGELOG') ) {
        grunt.file.copy( asset('CHANGELOG'), 'CHANGELOG' );
        grunt.log.ok('Created CHANGELOG file');
    }
    meta.changelog = grunt.file.readYAML('CHANGELOG');

    // Read contributing markdown file
    if ( !grunt.file.exists('CONTRIBUTING.md') ) {
        grunt.file.copy( asset('CONTRIBUTING.md'), 'CONTRIBUTING.md' );
        grunt.log.ok('Created CONTRIBUTING.md');
    }
    meta.contributing = grunt.file.read('CONTRIBUTING.md');

    // Read license file
    if ( !grunt.file.exists('LICENSE') ) {
        grunt.file.copy( asset('LICENSE'), 'LICENSE' );
        grunt.log.ok('Created LICENSE file');
    }
    meta.license = grunt.file.read('LICENSE');

    // Generate readme.
    var tmpl = grunt.file.read( asset('README.tmpl.md') ),
        appendix = grunt.template.process( tmpl, {data: meta, delimiters: 'build-cfpb'} ),
        readme = grunt.file.exists('README.md') ? grunt.file.read('README.md') : '';

    // Remove contributing section and everything after from readme because we'll be re-adding it.
    // ([\s\n\r]*) selects any whitespace before the contributing title.
    // ([\s\S]*) selects everything after the contributing title.
    readme = readme.replace(/([\s\n\r]*)## Contributing([\s\S]*)/ig, '');

    grunt.file.write( 'README.md', readme + appendix );
    grunt.log.ok('Created README.md');

    // Fail task if any errors were logged.
    if ( this.errorCount > 0 ) { return false; }
  });

};
