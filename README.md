# grunt-cfpb-internal

Internal grunt task for automating project documentation and semantic versioning. Inspired by [grunt-contrib-internal](https://github.com/gruntjs/grunt-contrib-internal).

This task does a few things:
* Creates [`CONTRIBUTING.md`](https://github.com/blog/1184-contributing-guidelines), `CHANGELOG`, `TERMS.md` and `COPYING.txt` files in your project's root if they don't already exist.
* Appends the aforementioned files to your `README.md` with a timestamp.
* Creates an [annotated git tag](http://git-scm.com/book/en/Git-Basics-Tagging#Annotated-Tags) using the [semver](http://semver.org/) convention.
* Bumps the version number in your package.json (and bower.json if applicable).

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

The project is in the public domain within the United States, and
copyright and related rights in the work worldwide are waived through
the [CC0 1.0 Universal public domain dedication](http://creativecommons.org/publicdomain/zero/1.0/).

All contributions to this project will be released under the CC0
dedication. By submitting a pull request, you are agreeing to comply
with this waiver of copyright interest.

## Release History

 * 2013-11-08   [v0.5.2](../../tree/v0.5.2)   Add shell.exec to make sure newly-created meta files get tracked/added.
 * 2013-11-08   [v0.5.1](../../tree/v0.5.1)   Separate tag and push tasks.
 * 2013-11-08   [v0.5.0](../../tree/v0.5.0)   Add CC0 licensing. Rename LICENSE to TERMS.
 * 2013-11-08   [v0.4.0](../../tree/v0.4.0)   Add Bower support.
 * 2013-11-07   [v0.3.1](../../tree/v0.3.1)   Improve unit testing.
 * 2013-11-05   [v0.3.0](../../tree/v0.3.0)   Tidy up docs and deps for public release.
 * 2013-07-26   [v0.2.3](../../tree/v0.2.3)   Link versions in README to GH tags.
 * 2013-07-12   [v0.2.2](../../tree/v0.2.2)   Fix package.json write bug. Commit before tagging. Improve verbosity.
 * 2013-07-11   [v0.2.1](../../tree/v0.2.1)   Fix package.json pollution bug.
 * 2013-07-11   [v0.2.0](../../tree/v0.2.0)   Auto-commit and push git tags. Auto-update package.json version.
 * 2013-07-06   [v0.1.1](../../tree/v0.1.1)   Make grunt task more verbose.
 * 2013-07-01   [v0.1.0](../../tree/v0.1.0)   Initial commit.

## License

The project is in the public domain within the United States, and
copyright and related rights in the work worldwide are waived through
the [CC0 1.0 Universal public domain dedication](http://creativecommons.org/publicdomain/zero/1.0/).

All contributions to this project will be released under the CC0
dedication. By submitting a pull request, you are agreeing to comply
with this waiver of copyright interest.

Software source code previously released under an open source license and then modified by CFPB staff is considered a "joint work" (see 17 USC § 101); it is partially copyrighted, partially public domain, and as a whole is protected by the copyrights of the non-government authors and must be released according to the terms of the original open-source license.

For further details, please see: http://www.consumerfinance.gov/developers/sourcecodepolicy/

Copyright (c) 2012 Tyler Kellen, contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

*This file was generated on Fri Nov 08 2013 15:18:47.*
