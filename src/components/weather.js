import React from "react";

const Weather = (props) => {
    return (
        <div className = "container">
        <div className = "card">
            <div className = "face face1">
                <div className = "content">
                    <h3>City name : {props.cityName} </h3><br />
                     { props.weather == "Snow" ? <p> weather : {props.weather} ❄️</p> :
                        props.weather == "Rain" ? <p> weather : {props.weather} 🌧️</p> :
                        props.weather == "Clouds" ? <p> weather : {props.weather} ☁️</p> :
                         <p> weather : {props.weather} ☀️</p> }
                     

                    <p>temperature : {props.temperature} </p>
                </div>
            </div>
            <div className = "face face2">
                <div className = "content">
                    <p> feel as : {props.feel}</p>
                    <p> wind speed : {props.wind} m/s</p>
                    <p> sunset time: {props.sunset} </p>
                    <p> humidity : {props.humidity} %</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Weather