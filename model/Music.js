const memoryDatabase = require('../database')

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
      return memoryDatabase.all('SELECT * FROM musics')
    },
    getFirstArtistMusic: async function (artist) {
      return memoryDatabase.get('SELECT * FROM musics WHERE artist = $artist', {
        $artist: artist
      })
    }
  }
}

module.exports = Music
