// Start point for webpack client in the browser
// // boot the app inside browser 'normal react here'
import React from 'react'
import ReactDOM from 'react-dom'

import Home from './Components/Home'

// 'render' again to set handlers -> hydration
ReactDOM.hydrate(<Home />, document.querySelector('#root') )