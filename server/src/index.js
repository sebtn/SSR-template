import 'babel-polyfill'
import express from 'express'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'

const app = express()

/* Make public available fro html generation
  tell express to look for bundle.js inside public
  when rendering the template string inside get('/') 
*/
app.use(express.static('public'))

// Boot app from server
// ' * ' -> star passes request routes to 
// react router via renderer
app.get( '*', (req, res) => {
  const store = createStore()
  //initialize and pass data into store inside renderer
  res.send(renderer(req, store))
})

app.listen( 3000, () => console.log('Port 3000 is ready for action') )