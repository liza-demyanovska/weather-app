import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY = "c8a58edb8f0f7e9b655a359e5f924820";


class App extends React.Component {

    state = {
        weatherData: undefined,
        error: undefined,
    }

    gettingWeather = async(e) => {
        e.preventDefault();
        var city = e.target.elements.city.value;

        if (city) {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            if (response.status === 404) {
                this.setState({
                    weatherData: undefined,
                    error: "ОШИБКА! Введите верное название города на английском!",
                });
                return
            }

            const data = await response.json();
            var sunset = data.sys.sunset;
            var date = new Date(sunset * 1000);
            var sunsetDate = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

            this.setState({
                weatherData: {
                    temp: data.main.temp,
                    city: data.name,
                    country: data.sys.country,
                    pressure: data.main.pressure,
                    sunset: sunsetDate,
                },
                error: undefined
            });
        } else {
            this.setState({
                weatherData: undefined,
                error: "Введите название города на английском!",
            });
        }
    }
    
    render() {
        return ( 
        	<div className = "wrapper">
	            <Info />
	            <Form weatherMethod = {this.gettingWeather} /> 
	            <Weather weatherData = {this.state.weatherData} error = {this.state.error}/>   
            </div>
        );
    }
}

export default App;