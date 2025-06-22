import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox( {updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "a19b24b67ef554f4b6233c8d52f342c4";
    

    let getWeatherInfo = async ()=>{
     try{
       let response  =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResp = await response.json();
    // console.log(jsonResp);
    let result = {
        city: city,
        temp: jsonResp.main.temp,
        tempMax: jsonResp.main.temp_max,
        tempMin: jsonResp.main.temp_min,
        humidity: jsonResp.main.humidity,
        feelsLike: jsonResp.main.feels_like,
        weather: jsonResp.weather[0].description,
    }
    console.log(result);
    return result;
    }catch(err){
       throw err;
    }
    }

    let handleChange = (event) =>{
        setCity(event.target.value);
    }

    let hanldeSumbit = async (event) =>{
        try{
        event.preventDefault();
        console.log(city);
        setCity("");
    let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
         setError(false)
        }catch(err){
         setError(true);
        }
    }
    return(
        <div className='SearchBox'onSubmit={hanldeSumbit}>
            {/* <h3>Search for the weather</h3> */}
            <form action="">
             <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/><br />
             <Button variant="contained" type='submit' style={{marginTop: "15px"}}>Search</Button>
             {error && <p style={{fontWeight: "bold",color: "red"}}>No such place exists</p>}
              
            </form>
        </div>
    )
}