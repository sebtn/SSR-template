import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

import Home from './client/Components/Home'

const app = express()

/* Make public available fro html generation
  tell express to look for bundle.js inside public
  when rendering the template string inside get('/') 
*/
app.use(express.static('public'))

app.get( '/', (req, res) => {
  const content = renderToString(<Home />)

  const html = `
    <html>
      <head></head>
      <body>
        <div>${content}</div>
      </body>
      <script src="bundle.js"></script>
    </html>
  `

  res.send(html)
})

app.listen( 3000, () => console.log('Port 3000 is ready for action') )