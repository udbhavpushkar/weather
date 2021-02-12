import './App.css';
import CityInput from "./components/CityInput";
import CityWeather from "./components/CityWeather";
import {useState} from "react";
function App() {
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState("")
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
                    setWeather(res.weather[0])
                }else{
                    setWeather("404")
                }
            })
    }
    return(
        <>
        <CityInput fetchCityWeather={fetchWeather} city={city} setCity={setCity}/>
        <CityWeather weather={weather}/>
        </>
    )
}

export default App;
