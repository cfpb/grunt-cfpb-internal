'use strict';

var grunt = require('grunt'),
    path = require('path'),
    fixture = path.resolve( __dirname, 'fixtures' ),
    tmp = path.resolve( __dirname, 'tmp' );

function testInternal(cmd, cb) {
  grunt.util.spawn({
    grunt: true,
    args: [cmd, '--no-color']
  }, function(err, result) {
    if (err) { throw new Error(err); }
    // If verbose is set output the results from the spawned command for debugging
    if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--verbose') !== -1) {
      console.log(String(result));
    }
    cb(String(result));
  });
}

exports.cfpb = {
  setUp: function(done) {
    grunt.file.copy( fixture + '/package.json', tmp + '/package.json' );
    done();
  },
  tearDown: function(done) {
    grunt.file.delete( tmp );
    done();
  },
  create: function( test ) {
    test.expect( 5 );
    testInternal( 'build-cfpb:test', function( results ){
      test.ok( grunt.file.exists( tmp + '/README.md' ), 'README was created.' );
      test.ok( grunt.file.exists( tmp + '/CHANGELOG' ), 'CHANGELOG was created.' );
      test.ok( grunt.file.exists( tmp + '/CONTRIBUTING.md' ), 'CONTRIBUTING.md was created.' );
      test.ok( grunt.file.exists( tmp + '/TERMS.md' ), 'TERMS.md was created.' );
      test.ok( grunt.file.exists( tmp + '/COPYING.txt' ), 'COPYING.txt was created.' );
      test.done();
    });
  },
  package: function( test ) {
    test.expect( 1 );
    grunt.file.copy( fixture + '/CHANGELOG', tmp + '/CHANGELOG' );
    testInternal( 'build-cfpb:test', function( results ){
      var pkg = grunt.file.read( tmp + '/package.json' );
      test.ok( pkg.indexOf( '0.4.0' ) !== -1, 'Bump package.json.' );
      test.done();
    });
  },
  bower: function( test ) {
    test.expect( 1 );
    grunt.file.copy( fixture + '/CHANGELOG', tmp + '/CHANGELOG' );
    grunt.file.copy( fixture + '/bower.json', tmp + '/bower.json' );
    testInternal( 'build-cfpb:test', function( results ){
      var bower = grunt.file.read( tmp + '/bower.json' );
      test.ok( bower.indexOf( '0.4.0' ) !== -1, 'Bump bower.json.' );
      test.done();
    });
  },
  readme: function( test ) {
    test.expect( 1 );
    grunt.file.copy( fixture + '/README.md', tmp + '/README.md' );
    testInternal( 'build-cfpb:test', function( results ){
      var readme = grunt.file.read( tmp + '/README.md' );
      test.ok( readme.indexOf( 'v0.3.0' ) === -1, 'Don\'t overwrite readme.' );
      test.done();
    });
  },
  changelog: function( test ) {
    test.expect( 2 );
    grunt.file.copy( fixture + '/CHANGELOG', tmp + '/CHANGELOG' );
    grunt.file.copy( fixture + '/README.md', tmp + '/README.md' );
    testInternal( 'build-cfpb:test', function( results ){
      var changelog = grunt.file.readYAML( tmp + '/CHANGELOG' ),
          version = Object.keys( changelog )[0],
          readme = grunt.file.read( tmp + '/README.md' );
      test.equal( version, 'v0.4.0', 'Don\'t overwrite changelog.' );
      test.ok( readme.indexOf( 'v0.4.0' ) !== -1, 'Readme should be bumped' );
      test.done();
    });
  }
};
