'use strict'

const { AsyncObject } = require('./../index')
const executedTestCoverageCheck = require('./custom-calls/executedTestCoverageCheck')

// Represented result is process
class ExecutedTestCoverageCheck extends AsyncObject {
  constructor (process, options) {
    super(process, options)
  }

  asyncCall () {
    return executedTestCoverageCheck
  }
}

module.exports = ExecutedTestCoverageCheck
