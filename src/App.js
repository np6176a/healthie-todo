import React, { useState } from 'react'
import styled from 'styled-components'
import HeaderBar from './Components/HeaderBar/HeaderBar'
import { Column } from './Components/Column/Column'
import { AddToDo } from './Components/AddToDo/AddToDo'
import { Card } from './Components/Card/Card'

const Row = styled.div`
    display: flex;
    width: 100vw;
    margin: 0 10px;
    position: relative;
`

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [columns, setColumns] = useState([
    {
      id: 0,
      title: 'To Do',
      cards: [{
        id: '0-0', title: 'Test', description: 'Test', user: 'bob',
      }],
    },
    {
      id: 1,
      title: 'In Progress',
      cards: [],
    },
    {
      id: 2,
      title: 'Done',
      cards: [],
    },
  ])

  const onAdd = (val) => {
    const columnsArray = new Array(...columns)
    const newCard = {
      id: `0-${columnsArray[0].cards.length + 1}`,
      ...val,
    }
    columnsArray[0].cards = [...columnsArray[0].cards, newCard]
    setColumns(columnsArray)
  }

  return (
    <div>
      <HeaderBar onClick={setIsOpen} />
      <Row>
        {isOpen ? <AddToDo onAdd={(val) => onAdd(val)} onCancel={() => setIsOpen(false)} /> : ''}
        {columns.map(({ id, title, cards }) => (
          <Column key={id} title={title}>
            {cards.map((card) => (
              <Card
                key={card.id}
                user={card.user}
                title={card.title}
                description={card.description}
              />
            ))}
          </Column>
        ))}
      </Row>
    </div>
  )
}

export default App
