const sqlite3 = require('sqlite3').verbose()
const log = require('./helpers/log')
const { promisify } = require('util')

function instantiateDatabase (database) {
  try {
    const db = new sqlite3.Database(database)
    return promisifyDatabase(db)
  } catch (e) {
    return {
      error: e,
      message: e.message || 'Something happened'
    }
  }
}

function promisifyDatabase (database) {
  return {
    run: promisify(database.run.bind(database)),
    get: promisify(database.get.bind(database)),
    all: promisify(database.all.bind(database))
  }
}

module.exports = instantiateDatabase('./db')
