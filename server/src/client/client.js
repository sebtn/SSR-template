// Start point for webpack client in the browser
// boot the app inside browser 'normal react here'
import React from 'react'
import ReactDOM from 'react-dom'
// wont work on server, expects hard coded route 
// in Browser address bar
import { BrowserRouter } from 'react-router-dom' 

import Routes from './Routes'

// 'render' again to set handlers -> hydration
ReactDOM.hydrate(
  <BrowserRouter>
    <Routes />    
  </BrowserRouter>
,document.querySelector('#root') )