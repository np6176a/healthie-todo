import React from 'react'
import PropType from 'prop-types'
import styled from 'styled-components'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'

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
  padding: 0 0.75rem;
`

export const AddToDo = ({ onCancel, onAdd }) => (
  <ModalOverlay>
    <Modal>
      <div style={{ minHeight: '50vh' }}>
        <Input value="" onChange={() => {}} label="Title" />
        <div>
          Text
        </div>
        <div>
          Select
        </div>
      </div>

      <ButtonRow>
        <Button
          onClick={onCancel}
          primary={false}
          label="Cancel"
        />
        <Button
          onClick={onAdd}
          label="Add To Do"
        />
      </ButtonRow>
    </Modal>
  </ModalOverlay>
)

AddToDo.propTypes = {
  onCancel: PropType.func.isRequired,
  onAdd: PropType.func.isRequired,
}
