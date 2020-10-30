const instantiateDatabase = require('../database')
const memoryDatabase = instantiateDatabase(':memory:')

async function Music () {
  await memoryDatabase.run("CREATE TABLE IF NOT EXISTS musics (name TEXT, artist TEXT)")
  return {
    createMusic: async function ({ name, artist }) {
       return memoryDatabase.run(`INSERT INTO musics(name, artist) VALUES($name, $artists)`, {
        $name: name,
        $artists: artist
      })
    },
    getAll: async function () {
      return memoryDatabase.get('SELECT * FROM musics')
    }
  }
}

module.exports = Music
