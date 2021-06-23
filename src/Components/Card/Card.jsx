import React from 'react'
import PropType from 'prop-types'
import styled from 'styled-components'

const StyledCard = styled.div`
  display: flex;
  padding: 0.75rem;
  background: #fff;
  margin-bottom: 5px;
  border-radius: 4px;
  box-shadow: 0 20px 40px 0 rgb(14 23 30 / 5%);
  h5{
    margin: 0 0 5px;
  };
  p{
    margin: 0;
    font-size: 0.85rem;
    line-height: 1rem;
  }
`
const Col = styled.div`
    box-sizing: border-box;
    flex: 0 0 auto;
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
`
const ImgCol = styled(Col)`
    max-width: 50px;
    height: 50px;
`

export const Card = ({ title, description }) => (
  <StyledCard>
    <ImgCol>
      Img
    </ImgCol>
    <Col>
      <h5>{title}</h5>
      <p>{description}</p>
    </Col>
  </StyledCard>
)

Card.defaultProps = {
  title: 'Sample Header',
  description: 'Your to dos go here...',
}
Card.propTypes = {
  title: PropType.string,
  description: PropType.node,
}
