import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'

export const PageNotFound = () => {
    return (
        <Container>
            <Row className="error">
                <Col xs="3" ></Col>
                <Col xs="auto">
                    <h1 className="pageError text-center"> 404 </h1>
                    <p> Oops... Page not found </p>
                    <p> We suggest you go to homepage while we fixing the problem. </p>
                    <Button color="danger" className="mt-4"> Back to homepage </Button></Col>
                <Col xs="3"></Col>
            </Row>
        </Container>
    )
}
