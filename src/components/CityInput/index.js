import React, {useState} from 'react';
import {Form, Button, Container} from "react-bootstrap";

const CityInput = () => {
    const [city, setCity] = useState("")
    const [error, setError] = useState("");
    const handleInputChange = (e)=>{
        setCity(e.target.value)
        console.log(city)
    }
    const handleClick = (e)=>{
        if (!city){
            setError("Field is empty")
        }else{
            setError("")

        }
    }
    return (
        <Container>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        value={city}
                        type="text"
                        onChange={handleInputChange}
                        placeholder="Enter City" />
                    <small className="text-danger">{error}</small>
                </Form.Group>
                <Button onClick={handleClick} variant="primary">
                    Submit
                </Button>
            </Form>
        </Container>

    );
};

export default CityInput;