// Start point for webpack client in the browser
// boot the app inside browser 'normal react here'
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
// wont work on server, expects hard coded route 
// in Browser address bar
import { BrowserRouter } from 'react-router-dom' 
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import Routes from './Routes'
import reducers from  './reducers'

const devExtension = compose( 
  window.devToolsExtension ? 
  window.devToolsExtension() : f => f 
)

const createMiddleware = applyMiddleware(
  thunk,
)(createStore)

const store = createMiddleware(reducers, devExtension)

// 'render' again to set handlers -> hydration
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />    
    </BrowserRouter>
  </Provider>
,document.querySelector('#root') )