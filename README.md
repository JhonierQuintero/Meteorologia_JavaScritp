# Datos de Temperatura

Este proyecto es una aplicación web que permite al usuario ingresar una ciudad y un país para obtener datos meteorológicos como la temperatura y las condiciones climáticas actuales. Utiliza APIs externas para obtener información precisa y actualizada.

## Estructura del Proyecto

El proyecto consta de los siguientes archivos:

1. **index.html**: Define la estructura de la página web.
2. **styles.css**: Contiene los estilos para el diseño visual de la aplicación.
3. **script.js**: Implementa la lógica para obtener y mostrar los datos meteorológicos.

## Funcionalidades

- Permite al usuario ingresar una ciudad y un país.
- Obtiene las coordenadas geográficas de la ciudad utilizando la API de geocodificación de Open-Meteo.
- Recupera los datos meteorológicos (temperatura, probabilidad de precipitación y condiciones climáticas) utilizando la API de pronóstico de Open-Meteo.
- Muestra los resultados en la página con un diseño claro y fácil de entender.
- Maneja errores como ciudad no encontrada o datos meteorológicos no disponibles.

## Tecnologías Utilizadas

- **HTML**: Para la estructura de la página.
- **CSS**: Para el diseño y estilos.
- **JavaScript**: Para la lógica y funcionalidad.
- **APIs**:
    - [Geocoding API de Open-Meteo](https://geocoding-api.open-meteo.com/v1/search): Para obtener las coordenadas de la ciudad.
    - [Weather API de Open-Meteo](https://api.open-meteo.com/v1/forecast): Para obtener los datos meteorológicos.

## Cómo Ejecutar el Proyecto

1. Clona este repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador.
3. Ingresa una ciudad y un país en los campos correspondientes.
4. Haz clic en el botón "Obtener datos" para ver los resultados.

## Lógica del JavaScript

El archivo `script.js` incluye las siguientes funciones principales:

- **getCoordinates(city, country)**: Obtiene las coordenadas geográficas de la ciudad ingresada.
- **getWeather(latitude, longitude)**: Recupera los datos meteorológicos utilizando las coordenadas obtenidas.
- **Event Listener**: Escucha el evento de clic en el botón y ejecuta las funciones para mostrar los datos en la página.

### Ejemplo de Uso

1. Ingresa "Madrid" como ciudad y "España" como país.
2. Haz clic en "Obtener datos".
3. Verás la temperatura y las condiciones climáticas actuales en Madrid.


## Autor
Jhonier Quintero

contacto: jhonierandresqunteromendoza@gmail.com

## Descripción del Proyecto
Este proyecto fue desarrollado como una demostración de una aplicación web interactiva para obtener datos meteorológicos utilizando APIs externas.