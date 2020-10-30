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

/**
 * @description Sqlite3 lib works with callbacks, so I prefered to transform it
 * into promise based object, to improve core redeability. We need to bind
 * database context because it probably use something internal on original
 * database object.
 * @function promisifyDatabase
 * @param  {object<Database>} database sqlite3 database
 * @return {object}
 */
function promisifyDatabase (database) {
  return {
    run: promisify(database.run.bind(database)),
    get: promisify(database.get.bind(database)),
    all: promisify(database.all.bind(database))
  }
}

module.exports = instantiateDatabase('./db')
