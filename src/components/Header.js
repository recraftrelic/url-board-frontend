import React from 'react'

import { Container, Row, Col } from 'reactstrap'

import '../styles/components/header.css'

export default class Header extends React.Component {
    render() {
        return (
            <Container className="Header">
                <Row>
                    <Col>
                        <h1 className="url-board">
                            URL BOARD
                        </h1>
                    </Col>
                </Row>
            </Container>
        );
    }
}