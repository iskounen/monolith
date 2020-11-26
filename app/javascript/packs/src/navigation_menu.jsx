import React from 'react'
import { TranslationText } from './translation_text'

export const NavigationMenu = (props) => {
  return (
    <div>
      <ul>
        <li>
          <a href="/" data-turbolinks="false">
            <TranslationText text="дом" translation="home" size="3" />
          </a>
        </li>
        <li>
          <a href="/accounts" data-turbolinks="false">
            <TranslationText text="счет" translation="accounts" size="3" />
          </a>
        </li>
      </ul>
    </div>
  )
}
