import { TODO_STATUSES } from './constants'

export function combineClasses(base = '', classList) {
  return base + (classList ? ` ${classList}` : '')
}

export function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}

export function addToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
  return data
}

export function createTodo(title) {
  return {
    title,
    id: crypto.randomUUID(),
    status: TODO_STATUSES.inProgress,
  }
}
