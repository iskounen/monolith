import React from 'react'
import ReactDOM from 'react-dom'
import { NavigationMenu } from '../src/navigation_menu'
import { TranslationText } from '../src/translation_text'

const HomeIndex = () => (
  <>
    <NavigationMenu />
    <TranslationText text="дом" translation="home" size="1" />
    <TranslationText text="индекс" translation="index" size="2" />
  </>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HomeIndex />,
    document.body.appendChild(document.createElement('div')),
  )
})
