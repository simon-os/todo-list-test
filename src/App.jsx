/* eslint-disable max-len */
import React from 'react'
import TodoList from './components/todo-list'
import Container from 'react-bootstrap/Container'

export default function App() {
  return (
    <main className='min-vh-100 d-flex justify-content-center align-items-center p-5'>
      <Container className='d-flex justify-content-center'>
        <TodoList classList='p-5 border border-2 rounded-3 border-primary' />
      </Container>
    </main>
  )
}
