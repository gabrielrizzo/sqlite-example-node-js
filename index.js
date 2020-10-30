const Music = require('./model/Music')

const execute = async () => {
  const music = await Music()
  await music.createMusic({ name: 'In the end', artist: 'Linkin Park' })
  const queryResult = await music.getAll()
  console.log(queryResult)
}

execute()
