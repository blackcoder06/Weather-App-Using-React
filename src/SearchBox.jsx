import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';


export default function SearchBox({updateInfo}) {
    let [city , setCity] = useState("");
    let [error , setError] = useState(false);
    const Api_Url = "https://api.openweathermap.org/data/2.5/weather";
    const Api_key = "127104ab3c959d1c9014b9048f27a958";
    let getWeatherInfo = async () => {
        try{
        let response =  await fetch(`${Api_Url}?q=${city}&appid=${Api_key}&units=metric`);
        let jsonResponse =  await response.json();
        // console.log(jsonResponse);
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempmin: jsonResponse.main.temp_min,
            tempmax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelslike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,


        };
        console.log(result);
        return result;
        } catch(err) {
            throw(err);
        }
    
    }
    

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async(event) => {
        try {
            event.preventDefault();
        console.log(city);
        setCity("");
        let newinfo = await getWeatherInfo();
        updateInfo(newinfo);
        } catch(err){
            setError(true);
        }
        
    }
    return (
        <div className='SearchBox'>
            
            <form action="" onSubmit={handleSubmit}>
            <TextField id="City" label="City Name" variant="filled" required value={city} onChange={handleChange}  />
            <br />
            <br />
            <Button variant="contained" type="submit" >
                Search
            </Button>
            {error && <p style={{color: "Red"}}>No Such Place In Our Api</p>}
            </form>
        </div>

    )
}