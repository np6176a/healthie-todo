import React from 'react'
import PropType from 'prop-types'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { USER_IMG } from '../../constants'

const StyledCard = styled.div`
  display: flex;
  padding: 0.75rem;
  background: #fff;
  margin-bottom: 5px;
  border-radius: 4px;
  box-shadow: 0 20px 40px 0 rgb(14 23 30 / 5%);
  h5{
    margin: 0 0 5px;
    font-size: 1rem;
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
    margin-right: 10px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const Card = ({
  id, index, user, title, description,
}) => (
  <Draggable draggableId={id} index={index}>
    {(provided) => (
      <StyledCard
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        <ImgCol>
          <img src={USER_IMG[user]} alt={user} />
        </ImgCol>
        <Col>
          <h5>{title}</h5>
          <p>{description}</p>
        </Col>
      </StyledCard>
    )}
  </Draggable>
)

Card.defaultProps = {
  user: 'bob',
  title: 'Sample Header',
  description: 'Your to dos go here...',
}
Card.propTypes = {
  id: PropType.string.isRequired,
  index: PropType.number.isRequired,
  title: PropType.string,
  description: PropType.node,
  user: PropType.oneOf(['bob', 'linda', 'tina', 'gene', 'louise']),
}
