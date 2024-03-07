import { 
  TODOS_FILTER, 
  TODOS_REPLACE,
  TODO_ADD,
  TODO_REMOVE, 
  TODO_TOGGLE,
} from './types'

export const addTodo = (payload) => ({
  type: TODO_ADD,
  payload,
})

export const removeTodo = (payload) => ({
  type: TODO_REMOVE,
  payload,
})

export const toggleTodo = (payload) => ({
  type: TODO_TOGGLE,
  payload,
})

export const filterTodos = (payload) => ({
  type: TODOS_FILTER,
  payload,
})

export const replaceTodos = (payload) => ({
  type: TODOS_REPLACE,
  payload,
})
