import React from 'react'
import PropType from 'prop-types'
import styled from 'styled-components'

const StyledColumn = styled.div`
  padding: 0.5rem;
  background: #fafafa;
  min-height: 20vh; 
  width: 250px;
  margin: 20px 5px;
  border-radius: 2px;
  box-shadow: 0 20px 40px 0 rgb(14 23 30 / 2%);
  h4 {
    margin: 5px 0 10px;
  }
`
export const Column = ({ title, children }) => (
  <StyledColumn>
    <h4>{title}</h4>
    {children}
  </StyledColumn>
)

Column.defaultProps = {
  title: 'Sample Header',
  children: 'Your to dos go here...',
}
Column.propTypes = {
  title: PropType.string,
  children: PropType.node,
}
