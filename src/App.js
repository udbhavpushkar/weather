import './App.css';
import CityInput from "./components/CityInput";
import CityWeather from "./components/CityWeather";
import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";

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

                    setWeatherCity(res.name)
                    setWeather(res.weather[0])
                    setWeatherNumbers(res.main)

                    console.log(res)
                    console.log(res.weather[0].main)
                    console.log(res.main)

                    if (res.weather[0].main==="Rain"){
                        setWeatherImage("https://images.pexels.com/photos/1100946/pexels-photo-1100946.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")
                    }else if(res.weather[0].main==="Haze"){
                        setWeatherImage("https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/10/23/746497-smog.jpg")
                    }else if(res.weather[0].main==="Clouds"){
                        setWeatherImage("https://images.pexels.com/photos/1478524/pexels-photo-1478524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
                    }else if(res.weather[0].main==="Smoke"){
                        setWeatherImage("https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/FQPQPJX64AI6TA2BZQ644UXH3Y.jpg")
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
            <Container>
                <Row>
                    <Col className="m-auto" xs={10} md={6}>
                        <CityInput fetchCityWeather={fetchWeather} city={city} setCity={setCity}/>
                        <CityWeather weatherNumber={weatherNumbers} weatherCity={weatherCity} weather={weather}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default App;
