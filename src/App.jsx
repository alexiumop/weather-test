import React from 'react';
import httpClient from './api/httpClient';

function App() {
    const result = httpClient.getActualWeatherByCityName('London')
    console.log(result.then(res => {
        return res.data
    }));
  return (
    <div>App</div>
  )
}

export default App;