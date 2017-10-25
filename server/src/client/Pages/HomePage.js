import React from 'react'

const Home = () => {
  return(
    <div>
      <h1>I' Home now! work hard please</h1> 
      <h1>New best one</h1> 
      <button onClick={() => console.log('Hi')}>
        Clicker Button
      </button>
    </div>
  ) 
}

export default {
  component: Home,
}