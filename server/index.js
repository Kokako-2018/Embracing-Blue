const server = require('./server')

require('dotenv').config()

var Knex = require('knex')
var config = require('../knexfile')[process.env.NODE_ENV || 'development']
var knex = Knex(config)


server.set('db', knex)

const port = process.env.PORT || 3000

server.listen(port, function () {
  console.log('Listening on port', port)
})
