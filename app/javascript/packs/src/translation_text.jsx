import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  margin-bottom: 30px;
`
const Text = styled.span`
  font-size: ${props => props.fontSize ? props.fontSize : "128px"};
  font-weight: bold;
`

const Translation = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  background-color: white;
  font-size: ${props => props.fontSize ? props.fontSize : "32px"};
  font-style: italic;
`

export const TranslationText = (props) => {
  let textFontSize, translationFontSize

  switch (props.size) {
    case "1":
      textFontSize = "128px"
      translationFontSize = "32px"
      break
    case "2":
      textFontSize = "64px"
      translationFontSize = "16px"
      break
    case "3":
      textFontSize = "32px"
      translationFontSize = "8px"
      break
    default:
      textFontSize = "16px"
      translationFontSize = "4px"
  }

  return (
    <div>
      <Wrapper>
        <Text fontSize={textFontSize}>{props.text.toUpperCase()}</Text>
        <Translation fontSize={translationFontSize}>{props.translation.toUpperCase()}</Translation>
      </Wrapper>
    </div>
  )
}
