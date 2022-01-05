import './App.css';
import React, { Component } from 'react';
import ListComponent from './ListComponent';
import WeatherDetails, { getCity, getWeather, getIcon, getTemp } from './WeatherDetails';

class App extends Component {

  state = {
    zipcodes: [
      {
        city: 'Monsey',
        zip: '10952'
      },
      {
        city: 'Spring Valley',
        zip: '10977'
      }
    ]
  }

  async componentDidMount() {
    this.setState({ city: await getCity(this.state.zipcodes[0].zip) });
    this.setState({ weather: await getWeather(this.state.zipcodes[0].zip) });
    this.setState({ icon: await getIcon(this.state.zipcodes[0].zip) });
    this.setState({ temp: await getTemp(this.state.zipcodes[0].zip) });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="text-center">
          <h1>Weather App</h1>
          <hr />

          <ListComponent zipcodes={this.state.zipcodes} />
          <hr />
          <WeatherDetails city={this.state.city} weather={this.state.weather} icon={this.state.icon} temp={this.state.temp} />



        </div>
      </div>
    );
  }
}

export default App;
