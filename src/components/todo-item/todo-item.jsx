import React from 'react'
import Col from 'react-bootstrap/Col'
import TodoRow from '../todo-row'
import RemoveButton from '../remove-button'
import { useDispatch } from 'react-redux'
import { filterTodos, removeTodo, toggleTodo } from '../../store/actions'
import { TODO_STATUSES } from '../../lib/constants'
import { combineClasses } from '../../lib/utils'

export default function TodoItem({ id, title, status }) {
  const dispatch = useDispatch()

  const handleFilterTodos = (ev) => {
    ev.preventDefault()
    dispatch(filterTodos(status))
  }

  const handleToggleTodo = (ev) => {
    ev.preventDefault()
    dispatch(toggleTodo(id))
  }

  const handleRemoveTodo = () => {
    dispatch(removeTodo(id))
  }

  return (
    <TodoRow>
      <Col className='d-flex align-items-center'>
        <span
          className={
            combineClasses(
              'link-primary cursor-pointer',
              status === TODO_STATUSES.inProgress 
                ? 'text-decoration-none' 
                : 'text-decoration-line-through',
            )
          }
          onClick={handleToggleTodo} 
        >
          {title}
        </span>
      </Col>

      <Col className='d-flex align-items-center justify-content-center'>
        <span
          className='link-primary cursor-pointer'
          onClick={handleFilterTodos} 
        >
          {status}
        </span>
      </Col>

      <Col className='d-flex align-items-center justify-content-end'>
        <RemoveButton onRemove={handleRemoveTodo} />
      </Col>
    </TodoRow>
  )
}
