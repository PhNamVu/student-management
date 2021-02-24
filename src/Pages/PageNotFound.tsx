import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Col, Container, Row } from 'reactstrap'

export const PageNotFound = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Row className="error">
        <Col xs="3"></Col>
        <Col xs="auto">
          <h1 className="pageError text-center"> 404 </h1>
          <p> Oops... Page not found </p>
          <p> We suggest you go to homepage while we fixing the problem. </p>
          <Button color="danger" className="mt-4" onClick={() => {
            navigate(`/`)
          }}>
            {' '}
            Back to homepage{' '}
          </Button>
        </Col>
        <Col xs="3"></Col>
      </Row>
    </Container>
  )
}
