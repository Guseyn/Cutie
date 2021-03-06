'use strict'

const { AsyncObject } = require('./../index')
const executedTestCoverage = require('./custom-calls/executedTestCoverage')

// Represented result is process
class ExecutedTestCoverage extends AsyncObject {
  constructor (process, file) {
    super(process, file)
  }

  asyncCall () {
    return executedTestCoverage
  }
}

module.exports = ExecutedTestCoverage
