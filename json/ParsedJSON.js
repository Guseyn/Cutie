'use strict'

const { AsyncObject } = require('./../index')

// Represented result is json
class ParsedJSON extends AsyncObject {
  constructor (string) {
    super(string)
  }

  syncCall () {
    return JSON.parse
  }
}

module.exports = ParsedJSON
