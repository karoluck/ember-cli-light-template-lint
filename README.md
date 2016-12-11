# ember-cli-light-template-lint

## Super lightweight plugin to lint your ember templates!
* It's only about 6.5Kb of code.
* Dependent only on 2 light packages and great ember-template-lint.
* Can run standalone without any other ember package installed.
* Great for Continous Integration purpose.
* Supports rules from `.template-lintrc.js`
* Output similar to `ember-cli-template-lint`

## Installation

* `ember install ember-cli-light-template-lint`

## Running with ember

* `ember light-template-lint`

## Running standalone

* `node node_modules/ember-cli-light-template-lint/bin/lint.js`

## Options

* -d, --dir [templatesDir] *templates directory (default: app/templates)*

## Lint rules

Available on: [ember-template-lint](https://github.com/rwjblue/ember-template-lint)

## Notes

* Light linter isn't triggered by `ember test` command yet.
