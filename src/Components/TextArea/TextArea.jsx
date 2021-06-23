import React from 'react'
import PropType from 'prop-types'
import styled from 'styled-components'
import { COLORS } from '../../constants'

const Label = styled.label`
  color: ${COLORS.black};
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
`

const StyledTextArea = styled.textarea`
  border-radius: 2px;
  width: 100%;
  height: 150px;
  resize: none;
  padding: 8px 10px;
  background-color: #ffffff;
  border: 1px solid ${COLORS.grayOne};
  color: ${COLORS.black};
  outline: none;
  box-sizing: border-box;
  margin: 5px 0 10px;
  font-family: 'Karla', sans-serif;
  &:hover, &:focus, &:active{
    outline: none;
    border: 1px solid ${COLORS.black}; 
  }
`

export const TextArea = ({
  label,
  value,
  onChange,
}) => (
  <div>
    <Label>{label}</Label>
    <StyledTextArea
      onChange={onChange}
      value={value}
      placeholder="Some text"
    />
  </div>
)

TextArea.propTypes = {
  label: PropType.string.isRequired,
  value: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
}
