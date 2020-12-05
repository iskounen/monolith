import React from 'react'
import ReactDOM from 'react-dom'
import { NavigationMenu } from '../src/navigation_menu'
import { StatementsList } from '../src/statements_list'

const StatementsIndex = () => (
  <>
    <NavigationMenu />
    <h1>Statements</h1>
    <h2>Index</h2>
    <StatementsList />
  </>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <StatementsIndex />,
    document.body.appendChild(document.createElement('div')),
  )
})
