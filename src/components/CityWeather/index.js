import React from 'react';
import {Alert} from "react-bootstrap";
import Error from "../Error";

const CityWeather = ({weather}) => {
    if (weather==="404"){
        return <Error/>
    }else if (weather){
        return (
            <Alert variant="success">
                <Alert.Heading>{weather.main}</Alert.Heading>
                <p>{weather.description}</p>
                <hr />
                <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to keep things nice
                    and tidy.
                </p>
            </Alert>
        );
    }else {
        return <></>
    }
};

export default CityWeather;