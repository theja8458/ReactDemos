import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"


export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
        city: "poland",
        feelsLike: 39.05,
        humidity: 54,
        temp: 33.68,
        tempMax: 33.68,
        tempMin: 33.68,
        weather: "light rain"
    });

    let updateInfo = (result) =>{
        setWeatherInfo(result);
    }
    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App By Theja</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}