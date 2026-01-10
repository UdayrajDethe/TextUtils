import React from 'react'

export default function About(props) {
  return (
    <div className={`container my-3 text-${props.mode === 'light'? 'dark' : 'white'}`}>
      <h1>About Us</h1>
      <p>This is the About page of our application.</p>
    </div>
  )
}
