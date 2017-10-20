import express from 'express'
import renderer from './helpers/renderer'

const app = express()

/* Make public available fro html generation
  tell express to look for bundle.js inside public
  when rendering the template string inside get('/') 
*/
app.use(express.static('public'))

// Boot app from server
app.get( '/', (req, res) => {
  res.send(renderer())
})

app.listen( 3000, () => console.log('Port 3000 is ready for action') )