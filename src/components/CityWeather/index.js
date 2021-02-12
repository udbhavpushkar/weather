import React from 'react';
import {Alert} from "react-bootstrap";
import Error from "../Error";

const CityWeather = ({weather, weatherCity}) => {
    if (weather==="404"){
        return <Error/>
    }else if (weather){
        return (
            <Alert variant="success">
                <Alert.Heading>{weatherCity}</Alert.Heading>
                <p>{weather.main}</p>
                <hr />
                <p className="mb-0">{weather.description}</p>
            </Alert>
        );
    }else {
        return <></>
    }
};

export default CityWeather;