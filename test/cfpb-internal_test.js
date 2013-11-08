'use strict';

var grunt = require('grunt'),
    path = require('path'),
    fixture = path.resolve( __dirname, 'fixtures', 'package.json' ),
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
    grunt.file.copy( fixture, tmp + '/package.json' );
    done();
  },
  tearDown: function(done) {
    grunt.file.delete( tmp );
    done();
  },
  build: function( test ) {
    test.expect( 1 );
    testInternal( 'build-cfpb', function( results ){
      test.ok( true, 'Should be true.' );
      test.done();
    });
  }
};


// major: function(test) {
//     test.expect(2);
//     testbump('bump:major', function(result) {
//       test.ok(result.indexOf('from 0.1.0 to 1.0.0') !== -1, 'Should have bumped major version.');
//       test.equal(grunt.file.readJSON(tmp).version, '1.0.0', 'Should have written the version to the file.');
//       test.done();
//     });
//   },
