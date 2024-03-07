import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function ButtonsRow({ left, right }) {
  return (
    <Row className='mt-5'>
      <Col className='p-0'>
        {left}
      </Col>

      <Col className='p-0 d-flex justify-content-end'>
        {right}
      </Col>
    </Row>
  )
}
