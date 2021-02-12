import './App.css';
import CityInput from "./components/CityInput";
import CityWeather from "./components/CityWeather";
import React, {useState} from "react";
import {Container} from "react-bootstrap";

function App() {
    const [city, setCity] = useState("")
    const [weatherNumbers, setWeatherNumbers] = useState("")
    const [weather, setWeather] = useState("")
    const [weatherCity, setWeatherCity] = useState("")
    const [weatherImage, setWeatherImage] = useState("https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    const fetchWeather = ()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=477b0577b454816f45f8516126ea4bb8`)
            .then((result)=> {
                if (result.status===200) {
                    return result.json()
                }else{
                    return result.json()
                }
            })
            .then(res=>{
                if (res.cod!=="404"){
                    console.log(res)
                    setWeatherCity(res.name)
                    setWeather(res.weather[0])
                    setWeatherNumbers(res.main)
                    console.log(res.weather[0].main)
                    console.log(res.main)

                    if (res.weather[0].main==="Rain"){
                        setWeatherImage("https://images.pexels.com/photos/1100946/pexels-photo-1100946.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")
                    }else if(res.weather[0].main==="Haze"){
                        setWeatherImage("https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
                    }else if(res.weather[0].main==="Clouds"){
                        setWeatherImage("https://images.pexels.com/photos/1478524/pexels-photo-1478524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
                    }else if(res.weather[0].main==="Smoke"){
                        setWeatherImage("https://images.pexels.com/photos/1040473/pexels-photo-1040473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
                    }
                    else{
                        setWeatherImage("https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
                    }

                }else{
                    setWeather("404")
                }
            })
    }
    return(
        <div className="App" style={{background: `url(${weatherImage})`, backgroundRepeat: "no-repeat"}}>
            <Container style={{width: "40%"}}>
                <CityInput fetchCityWeather={fetchWeather} city={city} setCity={setCity}/>
                <CityWeather weatherNumber={weatherNumbers} weatherCity={weatherCity} weather={weather}/>
            </Container>
        </div>
    )
}

export default App;
