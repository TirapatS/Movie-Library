import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BasicGrid() {
    return (
        <Container fluid="md">
            <Row className="my-5">
                <Col xs={6} md={4}>Hello</Col>
                <Col xs={6} md={4}>World</Col>
                <Col xs={6} md={4}>Again</Col>
            </Row>
        </Container>
    )
}

export default BasicGrid