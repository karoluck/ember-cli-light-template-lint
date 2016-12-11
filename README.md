# ember-cli-light-template-lint

## Super lightweight plugin to lint your ember templates!
* It's only about 6.5Kb of code.
* Dependent only on 2 light packages and `ember-template-lint`.
* This plugin can run standalone without any other ember package installed.
* Great for Continous Integration purposes.
* Supports rules defined in `.template-lintrc.js`
* Output is similar to `ember-cli-template-lint`

## Installation
*(note: Both commands are doing the same thing. But in CI you may have not installed ember-cli, so standalone install is preffered for CI)*

### With ember
`ember install ember-cli-light-template-lint`

### Standalone
`npm install ember-cli-light-template-lint --save-dev`

## Running

### With ember
`ember light-template-lint`

### Standalone
`node node_modules/ember-cli-light-template-lint/bin/lint.js`

## Options

* -d, --dir [templatesDir] *templates directory (default: app/templates)*

## Lint rules

Available on: [ember-template-lint](https://github.com/rwjblue/ember-template-lint)

## Notes

* Light linter isn't triggered by `ember test` command yet.
