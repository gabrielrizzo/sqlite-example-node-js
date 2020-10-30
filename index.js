const Music = require('./model/Music')

const createAndQueryMusic = async () => {
  const music = await Music()

  await music.createMusic({ name: 'In the end', artist: 'Linkin Park' })
  await music.createMusic({ name: 'Numb', artist: 'Linkin Park' })
  await music.createMusic({ name: 'Black', artist: 'Pearl Jam' })

  const queryResult = await music.getAll()
  const firstLpMuisc = await music.getFirstArtistMusic('Linkin Park')

  console.log('==== All musics ====', queryResult)
  console.log('==== First Music ====', firstLpMuisc)
}

createAndQueryMusic()
