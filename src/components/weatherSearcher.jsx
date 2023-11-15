import React from 'react';
import { Col, Navbar, Form, Row, Button } from 'react-bootstrap';
import { SEARCH_LABEL, CITY_SELECT } from '../constants';

const WeatherSearcher = ({handleSelect}) => {

    const CITIES_OPTIONS = CITY_SELECT.map((option, index) => {
        return <option value={option} key={index}>{option}</option>
    })

    const handleSubmit = e => {
        e.preventDefault();
        handleSelect(e.target.elements.cities.value)
    }

    return (
        <Navbar className="bg-body-tertiary justify-content-between">
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Row>
                    <Col xs="auto">
                        <Form.Group>
                            <Form.Label>{SEARCH_LABEL}</Form.Label>
                            <Form.Select name='cities'>
                                <option>{SEARCH_LABEL}</option>
                                {CITIES_OPTIONS}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col xs="auto">
                        <Button type="submit">Buscar</Button>
                    </Col>
                </Row>
            </Form>
        </Navbar>
    )
}

export default WeatherSearcher