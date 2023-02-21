const express = require('express')
const user = require('../components/user/network')
const message = require('../components/user/network')


const routes = (server) => {
  server.use('/user', user)
  server.use('/message', message)
}

module.exports = routes
