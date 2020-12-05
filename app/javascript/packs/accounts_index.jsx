import React from 'react'
import ReactDOM from 'react-dom'
import { NavigationMenu } from '../src/navigation_menu'
import { AccountsList } from '../src/accounts_list'

const AccountsIndex = () => (
  <>
    <NavigationMenu />
    <h1>Accounts</h1>
    <h2>Index</h2>
    <div>
      <a href="/accounts/new" data-turbolinks="false">New</a>
    </div>
    <AccountsList />
  </>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <AccountsIndex />,
    document.body.appendChild(document.createElement('div')),
  )
})
