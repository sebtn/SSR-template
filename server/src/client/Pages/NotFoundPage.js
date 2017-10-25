import React from 'react'

// context get passed as staticContext only in server
// as flag provider for err
// hydrating with browser router not thisOne
const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true
  return(
    <div className="center-align" style={{marginTop: '200px'}}>
      <h3>404 - Error</h3>
        <p>Page not found</p>
    </div>
  ) 
}

export default {
  component: NotFoundPage
}