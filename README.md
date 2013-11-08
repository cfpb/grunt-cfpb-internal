# grunt-cfpb-internal

Internal grunt task for automating project documentation and semantic versioning. Inspired by [grunt-contrib-internal](https://github.com/gruntjs/grunt-contrib-internal).

grunt-cfpb-internal does a few things:
* Creates [`CONTRIBUTING.md`](https://github.com/blog/1184-contributing-guidelines), `CHANGELOG` and [`LICENSE`](http://www.oss-watch.ac.uk/resources/opensourceyourcode#applying-the-licence) files in your project's root if they don't already exist.
* Appends the aforementioned files to your `README.md` with a timestamp.
* Creates and pushes an [annotated git tag](http://git-scm.com/book/en/Git-Basics-Tagging#Annotated-Tags) using the [semver](http://semver.org/) convention.
* Bumps the version number in your package.json.

## Getting Started

1. Install [Node](http://nodejs.org/) and [Grunt](http://gruntjs.com/getting-started)
1. `npm install grunt-cfpb-internal --save-dev`
1. Add `grunt.loadNpmTasks('grunt-cfpb-internal');` to your project's `Gruntfile.js`.

## Usage

1. Add a new entry in `CHANGELOG` whenever you fix bugs or add features. Adhere to the [semver](http://semver.org/) system.
1. Run the task with `grunt build-cfpb`.

## Documentation

View the [annotated source](https://cfpb.github.com/grunt-cfpb-internal/docs/build-cfpb.html).

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.

## Release History

 * 2013-11-05   [v0.3.0](../../tree/v0.3.0)   Tidy up docs and deps for public release.
 * 2013-07-26   [v0.2.3](../../tree/v0.2.3)   Link versions in README to GH tags.
 * 2013-07-12   [v0.2.2](../../tree/v0.2.2)   Fix package.json write bug. Commit before tagging. Improve verbosity.
 * 2013-07-11   [v0.2.1](../../tree/v0.2.1)   Fix package.json pollution bug.
 * 2013-07-11   [v0.2.0](../../tree/v0.2.0)   Auto-commit and push git tags. Auto-update package.json version.
 * 2013-07-06   [v0.1.1](../../tree/v0.1.1)   Make grunt task more verbose.
 * 2013-07-01   [v0.1.0](../../tree/v0.1.0)   Initial commit.

## License

Software source code written entirely by Consumer Financial Protection Bureau staff, and by contractors who are developing software on behalf of CFPB, is by default a public domain work.

Software source code previously released under an open source license and then modified by CFPB staff is considered a "joint work" (see 17 USC § 101); it is partially copyrighted, partially public domain, and as a whole is protected by the copyrights of the non-government authors and must be released according to the terms of the original open-source license.

For further details, please see: http://www.consumerfinance.gov/developers/sourcecodepolicy/

---

*This file was generated on Thu Nov 07 2013 21:20:53.*
