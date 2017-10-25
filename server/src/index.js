import 'babel-polyfill'
import express from 'express'
import { matchRoutes } from 'react-router-config'
import proxy from 'express-http-proxy'

import Routes from './client/Routes'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'

const app = express()

/* Make public available fro html generation
  tell express to look for bundle.js inside public
  when rendering the template string inside get('/') 
*/

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
  proxyReqOptDecorator(opts){ 
      opts.headers['x-forwarded-host'] = 'localhost:3000'
      return opts
    }
  }))
  .use(express.static('public'))

// Boot app from server
// ' * ' -> star passes request routes to 
// react router via renderer
// load data without rendering Component
app.get( '*', (req, res) => {
  const store = createStore(req)
  //tell which routes is assign to which component
  // assign redux store. Action creator passed
  const promises = matchRoutes(Routes, req.path).map(( {route} ) => {
    return route.loadData ? route.loadData(store) : null 
  })
  Promise.all(promises).then( () => {
    const context = {}
    const content = renderer(req, store, context) 
    //initialize and pass data into store inside renderer
    if(context.notFound) res.status(404)  
    res.send( content )
  }) 
})

app.listen( 3000, () => console.log('Port 3000 is ready for action') )