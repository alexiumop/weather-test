# weatherTest - Contiene una SPA creada en React para consultar el clima de la ciudad local y otras ciudades a seleccionar

## **SPA** :computer: :chart_with_upwards_trend: :mag_right: _:_

**Instalación de dependencias:**

>Luego de hacer git clone del repositorio y antes de levantarlo en el entorno local es indispensable realizar un **npm install** para agregar todas las dependencias y generar la carpeta **node_modules**

**Scripts de inicio:** 

  - npm run start:dev (_Este script es utilizado para levantar la spa en modo local_) --> **Utilizarlo para levantar la SPA posterior a haber realizado un git clone y un npm install.**
  - npm run start (_Este script es utilizado para levantar la spa en modo productivo_)
  - npm run build (_Este script es utilizado para la generación del build productivo_)

**Librerias utilizadas para el desarrollo de componentes y estilizado:**

  _Para componentes:_ :construction_worker:
  
  - React-bootstrap

 _Para estilizado:_ :art:
 
 - Css
 - Bootstrap

**Librerias utilizadas para invocaciones API Rest:**

  - Axios

**Librerias utilizadas para guardado de datos en Almacén:**

  - react-redux
  - redux/toolkit

**Contenedor de la SPA:**

> **App.jsx:** Contiene los componentes y la lógica siguiendo la estructura de HOC (High Order Component).

**Componentes de la SPA:**

1. **WeatherCard.jsx:** Componente encargado de consultar al store y mostrar la información recibida por respuesta del API.
2.  **WeatherSearcher.jsx:** Componente encargado de realizar la petición del clima al hacer una selección de ciudad y luego presionar el boton Buscar.
3.   **MultipleListWeather.jsx:** Componente utilizado para mapear la información del store referente a la consulta del clima a 5 dias cada 3 horas.

**Archivos de la SPA:**

1. **constants.js:** Un archivo que contiene todas las constantes para ser reutilizadas en cualquier componente.
2. **theme.css:** Archivo de estilo general basado en bootstrap.

## **API (Client-side)** 💻 _:_

> **Archivo httpClient.js generado para realizar las invocaciones con axios desde la SPA.**

- **_Se generó una función de invocación generica llamada axiosInstance donde se le devuelven la url de las funciones para invocar servicios_**

- **_Se generó una función llamada getActualWeatherByCityName donde se le envia por parametro el nombre de la ciudad para invocar al servicio openweathermap y traer el clima actual_**

- **_Se generó una función llamada getForecastWeather donde se le envia por parametro el nombre de la ciudad para invocar al servicio openweathermap y traer el clima de esa ciudad a 5 dias y cada 3 horas_**

- ## IMPORTANTE :warning: 

> ### NOTA: Se creó el proyecto de React desde 0 sin usar npx-create-reactapp, se realizó toda la configuración con webpack y babel, un package.json solo con las dependencias necesarias.
