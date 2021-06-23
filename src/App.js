import React from 'react'
import styled from 'styled-components'
import HeaderBar from './Components/HeaderBar/HeaderBar'
import { Column } from './Components/Column/Column'
// import { Card } from './Components/Card/Card'
import { ColumnList } from './utils'

const Row = styled.div`
    display: flex;
    width: 100vw;
    margin: 0 5px;
`

function App() {
  return (
    <div>
      <HeaderBar />
      <Row>
        {ColumnList.map(({ id, title }) => (<Column key={id} title={title} />))}
      </Row>
    </div>
  )
}

export default App
