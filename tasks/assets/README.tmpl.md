

## Contributing

{%= contributing || 'In lieu of a formal styleguide, take care to maintain the existing coding style.' %}

## Release History
{% if (changelog) {
  _.each(changelog, function(details, version) {
    var date = details.date;
    if (date instanceof Date) {
      date = grunt.template.date(new Date(date.getTime() + date.getTimezoneOffset() * 60000), 'yyyy-mm-dd');
    }
    version = '[' + version + ']' + '(../../tree/' + version + ')';
    print('\n * ' + [
      date,
      version,
      details.changes.join(' '),
    ].join('\u2003\u2003\u2003'));
  });
} else { %}
_(Nothing yet)_
{% } %}

## License

{%= license || 'This project is a work of the public domain.' %}

---

*This file was generated on {%= grunt.template.today() %}.*
