import React from 'react'
import ReactDOM from 'react-dom'
import { NavigationMenu } from '../src/navigation_menu'
import { AccountList } from '../src/account_list'

const AccountsIndex = () => (
  <>
    <NavigationMenu />
    <h1>Accounts</h1>
    <h2>Index</h2>
    <AccountList />
  </>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <AccountsIndex />,
    document.body.appendChild(document.createElement('div')),
  )
})
