import React from 'react';
import Card from 'react-bootstrap/Card';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';

const WeatherCard = () => {
    const uniqueCurrentLocationCard = useSelector(state => state.currentWeather);
    
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