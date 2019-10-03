const vfile = require('to-vfile')
const report = require('vfile-reporter')
const unified = require('unified')
const markdown = require('remark-parse')
const rebber = require('rebber')

unified()
  .use(markdown)
  .use(rebber)
  .process(vfile.readSync('example.md'), function(err, file) {
    console.error(report(err || file))
    console.log(String(file))
  })
