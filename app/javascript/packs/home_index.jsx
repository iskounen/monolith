import React from 'react'
import ReactDOM from 'react-dom'
import { NavigationMenu } from '../src/navigation_menu'

const HomeIndex = () => (
  <>
    <NavigationMenu />
    <h1>Home</h1>
    <h2>Index</h2>
  </>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HomeIndex />,
    document.body.appendChild(document.createElement('div')),
  )
})
