# grunt-cfpb-internal

[![Build Status](https://travis-ci.org/cfpb/grunt-cfpb-internal.svg)](https://travis-ci.org/cfpb/grunt-cfpb-internal)

Internal grunt task for automating project documentation and semantic versioning. Inspired by [grunt-contrib-internal](https://github.com/gruntjs/grunt-contrib-internal).

This task does a few things:
* Creates [`CONTRIBUTING.md`](https://github.com/blog/1184-contributing-guidelines), `CHANGELOG`, `TERMS.md` and `COPYING.txt` files in your project's root if they don't already exist.
* Appends the aforementioned files to your `README.md` with a timestamp.
* Creates an [annotated git tag](http://git-scm.com/book/en/Git-Basics-Tagging#Annotated-Tags) using the [semver](http://semver.org/) convention.
* Bumps the version number in your package.json (and bower.json if applicable).

## Getting Started

This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-cfpb-internal --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cfpb-internal');
```

## Usage

1. Add a new entry in `CHANGELOG` whenever you fix bugs or add features. Adhere to the [semver](http://semver.org/) system.
1. Run the task with `grunt build-cfpb`.

### Options

#### dir
Type: `String`  
Default: `./`

Specifies directory to be processed (your project's root).

#### commit
Type: `Boolean`  
Default: `true`

Commit all changes using git.

#### tag
Type: `Boolean`  
Default: `true`

Create an annotated git tag using the most recent version number in `CHANGELOG`.

#### push
Type: `Boolean`  
Default: `false`

Push git tags to remote repos.

## Usage Examples

```js
'build-cfpb': {
  main: {
    options: {
      commit: true,
      tag: false
    }
  }
}
```

## Documentation

View the [annotated source](https://cfpb.github.com/grunt-cfpb-internal/docs/build-cfpb.html).

## Contributing

If you'd like to contribute to grunt-cfpb-internal, please use the
fork-and-pull model:

1. Fork this repository to your personal account.
2. Create a branch and make your changes.
3. Test the changes locally/in your personal fork.
4. Submit a pull request to open a discussion about your proposed changes.
5. We'll talk about it and decide to merge or request additional changes.

## Release History

 * 2013-02-07   [v0.5.3](../../tree/v0.5.3)   Update terms to indicate it's a joint work.
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

The project is a "joint work" (see 17 USC § 101) of the United States and
its original authors. It is partially copyrighted, partially public domain,
and as a whole is protected by the MIT copyright. Segments written by CFPB
staff, and by contractors who are developing software on behalf of CFPB are
also in the public domain, and copyright and related rights for that work
are waived through the [CC0 1.0 Universal public domain dedication][CC0].

All contributions to this project will be released under the MIT license
(see COPYING.txt). By submitting a pull request, you are agreeing to comply
with said license.

[CC0]: http://creativecommons.org/publicdomain/zero/1.0/

---

*This file was generated on Wed May 28 2014 21:28:10.*
