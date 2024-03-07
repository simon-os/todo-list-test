import React from 'react'
import Row from 'react-bootstrap/Row'
import { combineClasses } from '../../lib/utils'

export default function TodoRow({ children, classList }) {
  return (
    <Row 
      className={combineClasses(
        classList,
        'px-3 py-2 my-3 border border-2 rounded-3 border-primary-subtle',
      )}
    >
      {children}
    </Row>
  )
}
