import React from 'react'
import ReactDOM from 'react-dom'
import { TranslationText } from './src/translation_text'

const WelcomeIndex = () => (
  <>
    <TranslationText text="ДОМ" translation="acceuil" size="1" />
    <TranslationText text="ИНДЕКС" translation="sommaire" size="2" />
  </>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <WelcomeIndex />,
    document.body.appendChild(document.createElement('div')),
  )
})
