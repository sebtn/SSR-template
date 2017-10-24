import React from 'react'
import { renderToString } from 'react-dom/server'
// communicate with the server to know the set of components
import { StaticRouter } from 'react-router-dom'
import { Provider } from'react-redux' 

import Routes from '../client/Routes'

//Tied to 'src/index.js' app.use method
// render the react app instantly
// no concurrency
export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>
  )
  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
      </body>
      <script src="bundle.js"></script>
    </html>
  `
}