import express from 'express'

const server = express()
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000
const HOSTNAME = process.env.PORT || 'localhost'

server.get('/', (__, res) => {
  return res.json({
    Status: 'Okay'
  })
})

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listening at http://${HOSTNAME}:${PORT}`)
})
