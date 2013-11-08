/*
 * grunt-cfpb-internal
 * https://github.com/cfpb/grunt-cfpb-internal
 *
 * A public domain work of the Consumer Financial Protection Bureau.
 *
 * Parts (c) 2012 Tyler Kellen, contributors
 * Licensed under the MIT license.
 */

'use strict';

var shell = require('shelljs');

module.exports = function( grunt ) {

  // Add custom template delimiters.
  grunt.template.addDelimiters( 'build-cfpb', '{%', '%}' );

  grunt.registerMultiTask( 'build-cfpb', 'Generate CFPB README', function() {

    var path = require('path'),
        asset = path.join.bind( null, __dirname, 'assets' ),
        options = this.options({
          dir: './',
          commit: true,
          tag: true
        }),
        dir = options.dir,
        meta = grunt.file.readJSON( dir + 'package.json' );

    // Read the changelog YAML file.
    if ( !grunt.file.exists( dir + 'CHANGELOG') ) {
        grunt.file.copy( asset('CHANGELOG'), dir + 'CHANGELOG' );
        grunt.log.ok('Created CHANGELOG file');
    }
    meta.changelog = grunt.file.readYAML( dir + 'CHANGELOG' );
    console.log( 'Current version: ' + Object.keys(meta.changelog)[0] );

    // Read the contributing markdown file.
    if ( !grunt.file.exists( dir + 'CONTRIBUTING.md' ) ) {
        grunt.file.copy( asset('CONTRIBUTING.md'), dir + 'CONTRIBUTING.md' );
        grunt.log.ok('Created CONTRIBUTING.md');
    }
    meta.contributing = grunt.file.read( dir + 'CONTRIBUTING.md' );

    // Read the license file.
    if ( !grunt.file.exists( dir + 'LICENSE' ) ) {
        grunt.file.copy( asset('LICENSE'), dir + 'LICENSE' );
        grunt.log.ok('Created LICENSE file');
    }
    meta.license = grunt.file.read( dir + 'LICENSE' );

    // Generate readme.
    var tmpl = grunt.file.read( asset('README.tmpl.md') ),
        appendix = grunt.template.process( tmpl, {data: meta, delimiters: 'build-cfpb'} ),
        readme = grunt.file.exists( dir + 'README.md' ) ? grunt.file.read( dir + 'README.md' ) : '';

    // Remove contributing section and everything after from readme because we'll be re-adding it.
    // ([\s\n\r]*) selects any whitespace before the contributing title.
    // ([\s\S]*) selects everything after the contributing title.
    var newReadme = readme.replace(/([\s\n\r]*)## Contributing([\s\S]*)/ig, '');

    grunt.file.write( dir + 'README.md', newReadme + appendix );
    grunt.log.ok('Created README.md');

    // Get the most recent version from the changelog.
    var version = Object.keys( meta.changelog )[0];

    // Check if the readme contains the most recent version (there's probably a better way to do this).
    if ( readme.indexOf( version ) === -1 ) {

        // Get a fresh copy of package json and stringify the latest CHANGELOG entry.
        var pkg = grunt.file.readJSON( dir + 'package.json' ),
            msg = meta.changelog[ version ].changes.join(' ');

        // Bump the version in package.json.
        pkg.version = version.replace( 'v', '' );
        grunt.file.write( dir + 'package.json', JSON.stringify( pkg, null, '  ' ) + '\n');
        grunt.log.ok( 'Version bumped to ' + version + ' in package.json.');

        if ( options.commit ) {
          // Commit the latest changes.
          shell.exec( 'git commit -am "' + msg + '"' );
          grunt.log.ok( 'Changes have been committed.' );
        }

        if ( options.tag ) {
          // Tag and push tags.
          shell.exec( 'git tag ' + version + ' -m "Version ' + version + '"', {silent:true} );
          shell.exec( 'git push --tags' );
          grunt.log.ok( 'Git tag has been created and pushed.' );
        }

    }

    // Fail task if any errors were logged.
    if ( this.errorCount > 0 ) { return false; }

  });

};
