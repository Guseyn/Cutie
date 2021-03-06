'use strict'

const { AsyncObject } = require('./../index')
const executedLint = require('./custom-calls/executedLint')

// Represented result is process
class ExecutedLint extends AsyncObject {
  constructor (process, ...files) {
    super(process, files)
  }

  asyncCall () {
    return executedLint
  }
}

module.exports = ExecutedLint
