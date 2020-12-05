import React from 'react'

export const NavigationMenu = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="/" data-turbolinks="false">Home</a>
        </li>
        <li>
          <a href="/accounts" data-turbolinks="false">Accounts</a>
        </li>
        <li>
          <a href="/statements" data-turbolinks="false">Statements</a>
        </li>
      </ul>
    </div>
  )
}
