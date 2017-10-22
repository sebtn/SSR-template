// Start point for webpack client in the browser
// boot the app inside browser 'normal react here'
import React from 'react'
import ReactDOM from 'react-dom'
// wont work on server, expects hard coded route 
// in Browser address bar
import { BrowserRouter } from 'react-router-dom' 
import { createStore, applyMiddelware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import Routes from './Routes'

const store = createStore(reducers, {}, applyMiddelware(thunk))

// 'render' again to set handlers -> hydration
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />    
    </BrowserRouter>
  </Provider>
,document.querySelector('#root') )