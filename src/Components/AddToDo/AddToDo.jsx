import React, { useState } from 'react'
import PropType from 'prop-types'
import styled from 'styled-components'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { TextArea } from '../TextArea/TextArea'
import { Select } from '../Select/Select'
import { USERS } from '../../constants'

const ModalOverlay = styled.div`
  position: absolute;
  width: -webkit-fill-available;
  height: 100vh;
  top:0;
  left: -10px;
  background: rgba(30,20,10,80%);
  padding: 40px;
  z-index: 1000;
`

const Modal = styled.div`
  background: #ffffff;
  max-width: 60%;
  margin: 0 auto;
  border-radius: 2px;
  box-shadow: 0 3px 3px 0 rgba(31,20,0,0.15);
  -webkit-box-shadow: 0 3px 3px 0 rgba(31,20,0,0.15);
  -moz-box-shadow: 0 3px 3px 0 rgba(31,20,0,0.15);
  padding: 20px 20px 30px;
`
const Row = styled.div`
  display: flex;
  padding: 0.75rem;
  margin-bottom: 5px;
  border-radius: 4px;
`
const ButtonRow = styled(Row)`
  justify-content: flex-end;
  padding: 1.5rem 0.75rem 0; 
  border-top: 1px solid #eee;
  border-radius: 0;
  button:first-child{
    margin-right: 10px;
  }
`

export const AddToDo = ({ onCancel, onAdd }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [user, setUser] = useState(USERS[0].value)

  const onClickAdd = () => {
    onAdd({ title, description, user })
    // close the modal
    onCancel()
  }
  return (
    <ModalOverlay>
      <Modal>
        <div style={{ minHeight: '50vh' }}>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} label="Title" />
          <TextArea label="Description" onChange={(e) => setDescription(e.target.value)} value={description} />
          <Select onChange={(e) => setUser(e.target.value)} label="Assign" options={USERS} value={user} />
        </div>

        <ButtonRow>
          <Button
            onClick={onCancel}
            primary={false}
            label="Cancel"
          />
          <Button
            disabled={title.length === 0}
            onClick={onClickAdd}
            label="Add To Do"
          />
        </ButtonRow>
      </Modal>
    </ModalOverlay>
  )
}

AddToDo.propTypes = {
  onCancel: PropType.func.isRequired,
  onAdd: PropType.func.isRequired,
}
