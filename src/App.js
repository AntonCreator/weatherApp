import React from "react";
import Input from "./components/input.js"
import Weather from "./components/weather.js"

const apiKey = "280cec9b8e9c040ae423c5a7dbdb6156";

class App extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      cityName : undefined,
      weather : undefined,
      temperature : undefined,
      feel : undefined,
      wind : undefined,
      sunset : undefined,
      humidity : undefined,
      visibility : false

    }
  }

  getWeather = async (city) => {
     const url_Api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
     const data = await url_Api.json();
     console.log (data)

     

     this.setState ({
      cityName : data.name,
      weather : data.weather[0].main,
      temperature : data.main.temp,
      feel : data.main.feels_like,
      wind : data.wind.speed,
      sunset : data.sys.sunset,
      humidity : data.main.humidity,
      visibility : true
     })
  }



  render () {
    return (

    <div>
      <h1>Weather App</h1>
      <h2>Change your city name and get weather</h2>
      <Input getWeather = {this.getWeather} />
      { this.state.visibility &&
      <Weather cityName = {this.state.cityName}
      weather = {this.state.weather}
      temperature = {this.state.temperature}
      feel = {this.state.feel}
      wind = {this.state.wind} 
      sunset = {this.state.sunset}
      humidity = {this.state.humidity}
       /> }

      <p>by AntonCreator</p>
    </div>
    )
  }
}


export default App;
