import React from 'react'
import PropType from 'prop-types'
import styled from 'styled-components'
import { Colors } from '../../constants'

const Label = styled.label`
  color: ${Colors.black};
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
`

const StyledInput = styled.input`
  border-radius: 2px;
  width: 100%;
  padding: 8px 10px;
  background-color: #ffffff;
  border: 1px solid ${Colors.grayOne};
  color: ${Colors.black};
  outline: none;
  box-sizing: border-box;
  margin: 5px 0 10px;
  &:hover, &:focus, &:active{
    outline: none;
    border: 1px solid ${Colors.black}; 
  }
`

export const Input = ({
  label,
  value,
  onChange,
}) => (
  <div>
    <Label>{label}</Label>
    <StyledInput
      onChange={onChange}
      value={value}
      placeholder="Some text"
    />
  </div>
)

Input.propTypes = {
  label: PropType.string.isRequired,
  value: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
}
