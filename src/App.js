import React, { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'
import HeaderBar from './Components/HeaderBar/HeaderBar'
import { Column } from './Components/Column/Column'
import { AddToDo } from './Components/AddToDo/AddToDo'

const Row = styled.div`
    display: flex;
    width: 100vw;
    margin: 0 10px;
    position: relative;
`

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [cards, setCards] = useState({
    'card-1': {
      id: 'card-1', title: 'Test', description: 'Test', user: 'bob',
    },
    'card-2': {
      id: 'card-2', title: 'More', description: 'Testing happens', user: 'tina',
    },
  })
  const [columns, setColumns] = useState({
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      cardIds: ['card-1', 'card-2'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      cardIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      cardIds: [],
    },
  })
  const [columnOrder] = useState(['column-1', 'column-2', 'column-3'])

  const onAdd = (val) => {
    // adding new card to all cards in state
    const newCardNumber = Object.keys(cards).length + 1
    const newCard = { id: `card-${newCardNumber}`, ...val }
    setCards({ ...cards, [newCard.id]: newCard })

    // adding card to To Do column
    const column = columns['column-1']
    const newCardIds = [...column.cardIds, `card-${newCardNumber}`]
    const newCol = { ...column, cardIds: newCardIds }
    setColumns({ ...columns, [newCol.id]: newCol })
  }

  const onDragEnd = (val) => {
    const { destination, source, draggableId } = val
    if (!destination) return
    if (destination.droppableId === source.droppableId && destination.index === source.index) return

    const column = columns[source.droppableId]
    const newCardIds = Array.from(column.cardIds)
    newCardIds.splice(source.index, 1)
    newCardIds.splice(destination.index, 0, draggableId)

    const newCol = { ...column, cardIds: newCardIds }

    setColumns({ ...columns, [newCol.id]: newCol })
  }

  return (
    <div>
      <HeaderBar onClick={setIsOpen} />
      <Row>
        {isOpen ? <AddToDo onAdd={(val) => onAdd(val)} onCancel={() => setIsOpen(false)} /> : ''}
        <DragDropContext onDragEnd={onDragEnd}>
          {columnOrder.map((columnId) => {
            const column = columns[columnId]
            return (
              <Column
                key={column.id}
                id={columnId}
                title={column.title}
                cardIds={column.cardIds}
                allCards={cards}
              />
            )
          })}
        </DragDropContext>
      </Row>
    </div>
  )
}

export default App
