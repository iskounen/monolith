import React from 'react'
import ReactDOM from 'react-dom'

const WelcomeIndex = () => (
  <div>
    <h1>Welcome</h1>
    <h2>Index</h2>
  </div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <WelcomeIndex />,
    document.body.appendChild(document.createElement('div')),
  )
})
