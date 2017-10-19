const express = require('express')
const react = require('react')
const renderToString = require('react-dom/server').renderToString

const Home = require('./client/Components/Home').default

const app = express()

app.get( '/', (req, res) => {
  const content = renderToString(<Home />)

  res.send(content)
})

app.listen( 3000, () => console.log('Port 3000 is ready for action') )