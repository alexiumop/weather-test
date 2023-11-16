import React from 'react';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const WeatherCard = () => {
    const uniqueCurrentLocationData = useSelector(state => state.currentWeather);
    const multipleWeatherData = useSelector(state => state.forecastWeather);
  return (
    <Card>
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>

        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default WeatherCard