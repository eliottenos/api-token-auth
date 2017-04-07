'use strict'

const config = require('../config.js')

const signUp = (data) => {
  console.log('data is data, data')
  return $.ajax({
    url: config.apiOrigin + '/sign-up/',
    method: 'POST',
    data
    // data: data
  })
}

const signIn = (data) => {
  console.log('data is data, data, data')
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
    // data: data
  })
}

module.exports = {
  signUp,
  signIn
}
