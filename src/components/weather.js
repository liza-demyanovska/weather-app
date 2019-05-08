import React from 'react';

class Weather extends React.Component {
    render() {
        let html = '';
        if (this.props.weatherData) {
            html = <div>
                <p>Месторасположение:{this.props.weatherData.city},{this.props.weatherData.country}</p>
                <p>Температура:{this.props.weatherData.temp}</p>
                <p>Давление:{this.props.weatherData.pressure}</p>
                <p>Заход солнца:{this.props.weatherData.sunset}</p>
            </div>
        } else {
            html = '';
        }

        return (
            <div className="item">
                {html}
                <p>{this.props.error}</p>
            </div>
        );
    }
}

export default Weather;
