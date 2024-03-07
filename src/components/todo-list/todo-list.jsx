import React, { useEffect } from 'react'
import ButtonsRow from '../buttons-row'
import Button from 'react-bootstrap/Button'
import TodoHead from './todo-head'
import TodoItem from './todo-item'
import { 
  addToLocalStorage, 
  combineClasses, 
  getFromLocalStorage, 
} from '../../lib/utils'
import { useDispatch, useSelector } from 'react-redux'
import { TODO_STATUSES } from '../../lib/constants'
import { filterTodos, replaceTodos } from '../../store/actions'

export default function TodoList({ classList }) {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)
  const filteredBy = useSelector((state) => state.filteredBy)

  const filteredTodos = filteredBy 
    ? todos.filter((todo) => todo.status === filteredBy)
    : todos

  const todosCount = {
    [TODO_STATUSES.inProgress]: 
      todos.filter((todo) => todo.status === TODO_STATUSES.inProgress).length,
    [TODO_STATUSES.completed]: 
      todos.filter((todo) => todo.status === TODO_STATUSES.completed).length,
  }

  useEffect(() => {
    addToLocalStorage('todos', todos)
  }, [])

  const handleRemoveFilter = () => {
    dispatch(filterTodos())
  }

  const handleCancel = () => {
    dispatch(replaceTodos(getFromLocalStorage('todos')))
  }

  const handleSave = () => {
    dispatch(replaceTodos(addToLocalStorage('todos', todos)))
  }
  
  return (
    <div className={combineClasses('todo-list', classList)}>
      <TodoHead todosCount={todosCount} />
      
      {
        filteredBy &&
          <>
            <span className='text-muted'>Filtered By</span>: {filteredBy} 
            <sup 
              className='text-danger cursor-pointer p-1' 
              onClick={handleRemoveFilter}
            >
              x
            </sup>
          </>
      }

      {filteredTodos.map((todo) => (
        <TodoItem key={crypto.randomUUID()} {...todo} />
      ))}

      <ButtonsRow
        left={
          <Button 
            className='px-4' 
            onClick={handleCancel}
          >
            Cancel
          </Button>
        }
        
        right={
          <Button 
            variant='warning' 
            className='px-4'
            onClick={handleSave}
          >
            Save
          </Button>
        }
      />
    </div>
  )
}
