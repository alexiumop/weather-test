import React from 'react'
import { WEATHER, TEMP, TEMP_MAX_MIN, CLOUDS, WIND, HUMIDITY, FEELS_LIKE } from '../constants';
import { Accordion, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const MultipleListWeather = () => {

    const multipleWeatherDataList = useSelector(state => state.forecastWeather);
    const { city, list } = multipleWeatherDataList;

    return (
        <Col xs={12}>
            {list.map((forecast, index) => {
                return (
                    <Accordion key={index}>
                        <Accordion.Item eventKey={index} key={index}>
                            <Accordion.Header>{`Reporte ${city.name} ${forecast.dt_txt}`}</Accordion.Header>
                            <Accordion.Body>
                                <Col key={index} xs={9}>
                                    <Col xs={12}>
                                        <h5>{WEATHER}:</h5>
                                    </Col>
                                    <Col xs={12}>
                                        <Col xs={6}>
                                            {forecast.weather[0].main} and {' '}
                                            {forecast.weather[0].description}
                                        </Col>
                                        <Col xs={6}>
                                            <label>{TEMP}:</label>{' '}
                                            {`${forecast.main.temp}°C`}
                                        </Col>
                                        <Col xs={6}>
                                            <label>{FEELS_LIKE}:</label>
                                            {`${forecast.main.feels_like}°C`}
                                        </Col>
                                        <Col xs={12}>
                                            <label>{TEMP_MAX_MIN}:</label>
                                            {`${forecast.main.temp_max}°C/${forecast.main.temp_min}°C`}
                                        </Col>
                                        <Col xs={6}>
                                            <label>{HUMIDITY}:</label>
                                            {`${forecast.main.humidity}%`}
                                        </Col>
                                    </Col>
                                    <hr />
                                    <Col xs={6}>
                                        <h5>{CLOUDS}:</h5>
                                        {`${forecast.clouds.all}%`}
                                    </Col>
                                    <hr />
                                    <Col xs={6}>
                                        <h5>{WIND}:</h5>
                                        {`${forecast.wind.speed}`}
                                    </Col>
                                </Col>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                )
            })}
        </Col>
    )
}

export default MultipleListWeather;