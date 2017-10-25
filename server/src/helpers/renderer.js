import React from 'react'
import { renderToString } from 'react-dom/server'
// communicate with the server to know the set of components
import { StaticRouter } from 'react-router-dom'
import { Provider } from'react-redux' 
import { renderRoutes } from 'react-router-config'
import serialize from 'serialize-javascript'

import Routes from '../client/Routes'

// Tied to 'src/index.js' app.use method
// render the react app instantly
// no concurrency unless INITIAL_STATE  
// from getState() is used
// context is a third argument for err detection
export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        {/*<Routes />*/}
        <div>{ renderRoutes(Routes) }</div>
      </StaticRouter>
    </Provider>
  )
  return `
    <html>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
      <script>window.INITIAL_STATE=${ serialize(store.getState()) }</script>
      <script src="bundle.js"></script>
    </html>
  `
}