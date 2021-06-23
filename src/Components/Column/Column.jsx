import React from 'react'
import PropType from 'prop-types'
import { Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { Card } from '../Card/Card'
import { COLORS } from '../../constants'

const StyledColumn = styled.div`
  background: #fafafa;
  min-height: 20vh; 
  width: 300px;
  margin: 20px 5px;
  border-radius: 2px;
  box-shadow: 0 20px 40px 0 rgb(14 23 30 / 2%);
  display: flex;
  flex-direction: column;
  h4 {
    margin: 0.5rem 0.5rem 10px;
  }
`
const CardList = styled.div`
  padding: 0.5rem 0.5rem 0;
  width: 100%;
  height: 100%;
  transition: background 0.2s ease;
  background: ${(props) => (props.isDragging ? COLORS.grayOne : '#fafafa')};
  box-sizing: border-box;
  flex-grow: 1;
  min-height: 100px;
`
export const Column = ({
  id, title, cardIds, allCards,
}) => (
  <StyledColumn>
    <h4>{title}</h4>
    <Droppable droppableId={id}>
      {(provided, snapshot) => (
        <CardList
          ref={provided.innerRef}
          {...provided.droppableProps}
          isDragging={snapshot.isDraggingOver}
        >
          {cardIds.length > 0 ? cardIds.map((c, i) => {
            const card = allCards[c]
            return (
              <Card
                key={card.id}
                title={card.title}
                description={card.description}
                user={card.user}
                id={card.id}
                index={i}
              />
            )
          }) : ''}
          {provided.placeholder}
        </CardList>
      )}
    </Droppable>
  </StyledColumn>
)

Column.defaultProps = {
  title: 'Sample Header',
  cardIds: [],
  allCards: {},
}
Column.propTypes = {
  id: PropType.string.isRequired,
  title: PropType.string,
  cardIds: PropType.arrayOf(PropType.string),
  allCards: PropType.shape({
    id: PropType.string,
    title: PropType.string,
    description: PropType.string,
    user: PropType.string,
  }),
}
