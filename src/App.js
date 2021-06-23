import React, { useState } from 'react'
import styled from 'styled-components'
import HeaderBar from './Components/HeaderBar/HeaderBar'
import { Column } from './Components/Column/Column'
import { ColumnList } from './constants'
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

  return (
    <div>
      <HeaderBar onClick={setIsOpen} />
      <Row>
        {isOpen ? <AddToDo onAdd={(val) => console.log(val)} onCancel={() => setIsOpen(false)} /> : ''}
        {ColumnList.map(({ id, title, cards }) => (
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
