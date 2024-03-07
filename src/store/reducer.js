import { TODO_STATUSES } from '../lib/constants'
import { getFromLocalStorage } from '../lib/utils'
import { 
  TODO_ADD, 
  TODOS_FILTER, 
  TODO_REMOVE, 
  TODO_TOGGLE, 
  TODOS_REPLACE, 
} from './types'

const defaultState = {
  todos: getFromLocalStorage('todos') ?? [],
  filteredBy: null,
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case TODO_ADD: {
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload,
        ],
      }
    }

    case TODO_REMOVE: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      }
    }

    case TODO_TOGGLE: {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload) return todo
          
          const updatedStatus = todo.status === TODO_STATUSES.inProgress
            ? TODO_STATUSES.completed 
            : TODO_STATUSES.inProgress

          return {
            ...todo,
            status: updatedStatus,
          }
        }),
      }
    }

    case TODOS_FILTER: {
      return {
        ...state,
        filteredBy: action.payload,
      }
    }

    case TODOS_REPLACE: {
      return {
        ...state,
        todos: action.payload,
      }
    }

    default: {
      return state
    }
  }
}
