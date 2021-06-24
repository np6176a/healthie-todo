import React, { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'
import Confetti from 'react-confetti'
import HeaderBar from './Components/HeaderBar/HeaderBar'
import { Column } from './Components/Column/Column'
import { AddToDo } from './Components/AddToDo/AddToDo'
import { useShowConfetti, useWindowSize } from './hooks'

const Row = styled.div`
    display: flex;
    width: 100vw;
    margin: 0 10px;
    position: relative;
`

function App() {
  const { width, height } = useWindowSize()
  const { show, updateShow } = useShowConfetti()
  const [isOpen, setIsOpen] = useState(false)

  const [cards, setCards] = useState({
    'card-1': {
      id: 'card-1',
      title: 'Get Linda a gift',
      description: 'Her birthday is coming up. Need to get her an awesome present.',
      user: 'bob',
    },
    'card-2': {
      id: 'card-2',
      title: 'Write in diary',
      description: 'Add new entry to personal diary.',
      user: 'tina',
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

    const start = columns[source.droppableId]
    const end = columns[destination.droppableId]

    // moving card within same column
    if (start.id === end.id) {
      const cardIds = Array.from(start.cardIds)
      cardIds.splice(source.index, 1) // removing
      cardIds.splice(destination.index, 0, draggableId) // adding in new position
      const newCol = { ...start, cardIds }

      setColumns({ ...columns, [start.id]: newCol })
    } else {
      // moving between columns
      const startCardIds = Array.from(start.cardIds)
      startCardIds.splice(source.index, 1)
      const newStartCol = { ...start, cardIds: startCardIds }

      const endCardIds = Array.from(end.cardIds)
      endCardIds.splice(destination.index, 0, draggableId)
      const newEndCol = { ...end, cardIds: endCardIds }
      updateShow(end.title)

      setColumns({ ...columns, [start.id]: newStartCol, [end.id]: newEndCol })
    }
  }

  return (
    <div>
      <HeaderBar onClick={setIsOpen} />
      <Row>
        {isOpen ? <AddToDo onAdd={(val) => onAdd(val)} onCancel={() => setIsOpen(false)} /> : ''}
        <Confetti width={width} height={height} style={{ display: show ? 'block' : 'none', transition: '0.5s ease' }} />
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
