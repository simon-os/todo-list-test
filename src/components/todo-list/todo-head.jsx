/* eslint-disable no-alert */
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import TodoRow from './todo-row'
import { TODO_STATUSES } from '../../lib/constants'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/actions'
import { createTodo } from '../../lib/utils'

export default function TodoHead({ todosCount }) {
  const [todoTitle, setTodoTitle] = useState('')
  const dispatch = useDispatch()

  const handleAddTodo = (ev) => {
    ev.preventDefault()

    const title = new FormData(ev.target).get('title').trim()
    if (title.length > 10 || title.length === 0) {
      alert('Task title must be shorter than 10 characters and not empty')
      return
    }

    const newTodo = createTodo(title)
    dispatch(addTodo(newTodo))
    setTodoTitle('')
  }

  return (
    <TodoRow classList='py-3 mt-0'>
      <Col className='d-flex justify-content-between align-items-center'>
        <Form onSubmit={handleAddTodo}>
          <InputGroup>
            <Form.Control 
              placeholder='Enter Task Title' 
              name='title'
              value={todoTitle}
              onChange={(ev) => setTodoTitle(ev.target.value)}
            />
            
            <Button variant='warning' type='submit'>
              Add
            </Button>
          </InputGroup>
        </Form>
      </Col>

      <Col className='d-flex justify-content-between align-items-center'>
        <span>
          {TODO_STATUSES.inProgress}: {todosCount[TODO_STATUSES.inProgress]}
        </span>
        
        <span>
          {TODO_STATUSES.completed}: {todosCount[TODO_STATUSES.completed]}
        </span>
      </Col>
    </TodoRow>
  )
}
