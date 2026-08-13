import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
        city: "Pune",
        feelslike: 24.83,
        humidity: 69,
        temp: 24.52,
        tempmax: 24.67,
        tempmin: 24.52,
        weather: "overcast clouds",
    });

    let updateInfo = (newinfo) => {
        setWeatherInfo(newinfo);
    }


    return (
        <div style={{textAlign: "center"}}>
            <h2><b><i>Find Weather Forecast</i></b></h2>
            <SearchBox updateInfo={updateInfo}/>
            <br />
            <InfoBox info={weatherInfo}/>
            <p>Made with &hearts; by Ashwin</p>
        </div>
    )
}