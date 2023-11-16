import React from 'react';
import {Card, Col} from 'react-bootstrap';
import { TEMP, TEMP_MAX_MIN, FEELS_LIKE, HUMIDITY, CLOUDS, WIND, WEATHER } from '../constants';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const WeatherCard = () => {
    const uniqueCurrentLocationData = useSelector(state => state.currentWeather);
    const { main, name, weather, clouds, wind } = uniqueCurrentLocationData;

    /*Armado de la sección del clima actual sobre la ciudad Actual (como mejora lo podria abstraer 
        a un nuevo componente pero el tiempo no me ayudo) */ 
    const currentInfoWeather = weather.map((info, index) => {
        return (
            <Col key={index} xs={9}>
                <Col xs={12}>
                    <h5>{WEATHER}:</h5>
                </Col>
                <Col xs={12}>
                    <Col xs={6}>
                        {info.main} and {' '}
                        {info.description}
                        <i className={info.icon}></i>
                    </Col>
                    <Col xs={6}>
                        <label>{TEMP}:</label>{' '}
                        {`${main.temp}°C`}
                    </Col>
                    <Col xs={6}>
                        <label>{FEELS_LIKE}:</label>
                        {`${main.feels_like}°C`}
                    </Col>
                    <Col xs={12}>
                        <label>{TEMP_MAX_MIN}:</label>
                        {`${main.temp_max}°C/${main.temp_min}°C`}
                    </Col>
                    <Col xs={6}>
                        <label>{HUMIDITY}:</label>
                        {`${main.humidity}%`}
                    </Col>
                </Col>
                <hr />
                <Col xs={6}>
                    <h5>{CLOUDS}:</h5>
                    {`${clouds.all}%`}
                </Col>
                <hr />
                <Col xs={6}>
                    <h5>{WIND}:</h5>
                    {`${wind.speed}`}
                </Col>
            </Col>
        )
    })

    /* Render General*/
    return (
        <Card>
            <Card.Img variant="top"/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <Col xs={12}>
                        <h3>Clima Actual sobre la ciudad de {name}</h3>
                    </Col>
                    {currentInfoWeather}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default WeatherCard