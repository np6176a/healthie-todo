import React from 'react'
import PropType from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { Colors } from '../../constants'

const StyledButton = styled.button`
    background: transparent;
    border: ${(props) => (props.primary ? '2px solid #237bff' : 'none')};
    border-radius: ${(props) => (props.isIcon ? '100%' : '3px')};
    width: ${(props) => (props.isIcon ? '45px' : '150px')};
    height: 45px;
    font-size: 1rem;
    line-height: 1rem;
    color: ${(props) => (props.primary ? Colors.primary : Colors.grayText)};
    &:hover{
        box-shadow: 0 5px 5px 0 rgb(14 23 30 / 20%);
        background: #fcfcfc;
        cursor: pointer;
        color: ${(props) => (props.primary ? Colors.primary : Colors.grayText)};
        text-decoration: ${(props) => (props.primary ? 'none' : 'underline')};
    }
`

export const Button = ({
  isIcon, primary, label, onClick,
}) => (
  <StyledButton
    onClick={onClick}
    isIcon={isIcon}
    primary={primary}
  >
    {isIcon ? <FontAwesomeIcon icon={faPlus} /> : label}
  </StyledButton>
)

Button.defaultProps = {
  isIcon: false,
  primary: true,
  label: 'Button',
  onClick: () => {
  },
}
Button.propTypes = {
  isIcon: PropType.bool,
  primary: PropType.bool,
  label: PropType.string,
  onClick: PropType.func,
}
