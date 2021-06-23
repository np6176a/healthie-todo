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

const StyledSelect = styled.select`
  border-radius: 2px;
  width: 100%;
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

export const Select = ({
  label,
  value,
  options,
  onChange,
}) => (
  <div>
    <Label>{label}</Label>
    <StyledSelect
      onChange={onChange}
      value={value}
      placeholder="Some text"
    >
      {options.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
    </StyledSelect>
  </div>
)

Select.propTypes = {
  options: PropType.arrayOf(PropType.object).isRequired,
  label: PropType.string.isRequired,
  value: PropType.shape({ value: PropType.string, label: PropType.string }).isRequired,
  onChange: PropType.func.isRequired,
}
