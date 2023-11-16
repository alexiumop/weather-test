import React, {useEffect} from 'react';
import httpClient from './api/httpClient';
import { useDispatch } from 'react-redux';
import { getCurrentLocationWeather } from './redux/slices/currentWeather';
import { getMultipleWeather } from './redux/slices/forecastWeather';
import { Container, Row } from 'react-bootstrap';
import WeatherSearcher from './components/weatherSearcher';
import WeatherCard from './components/weatherCard';

const App = () => {

    const dispatch = useDispatch();

    /*Efecto encargado de hacer la invocación al iniciar
     por primera vez a la página y responder con el clima actual de la ciudad origen "Buenos Aires".*/
    useEffect(() => {
        const currentLocationWeather = httpClient.getActualWeatherByCityName('Buenos Aires');
        /*La linea a continuación es encargada de leer y despachar la respuesta al store.*/
        currentLocationWeather.then(res => dispatch(getCurrentLocationWeather(res.response)));
         /* Obtengo multiples reportes del clima del otro endpoint y envio al almacen */
         const newforecastWeather = httpClient.getForecastWeather('Buenos Aires');
         newforecastWeather.then(res => dispatch(getMultipleWeather(res.response)));
    }, []);

    /*Función manejadora para el seleccionador de ciudades, siguiendo la estructura HOC.*/
    const handleSelectCities = cityName => {
        /*Al seleccionar una nueva ciudad primero obtengo de vuelta el current weather y actualizo el store*/
        const newCurrentLocationWeather = httpClient.getActualWeatherByCityName(cityName);
        newCurrentLocationWeather.then(res => dispatch(getCurrentLocationWeather(res.response)));
        const newforecastWeather = httpClient.getForecastWeather(cityName);
        newforecastWeather.then(res => dispatch(getMultipleWeather(res.response)));
    } 
    
  return (
   <Container>
        <Row className="justify-content-md-center">
            <WeatherSearcher handleSelect={handleSelectCities} />
        </Row>
        <Row>
            <WeatherCard />
        </Row>
   </Container>
  )
}

export default App;