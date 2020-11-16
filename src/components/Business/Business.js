import React from 'react';
import './Business.css';
import Card from "react-bootstrap/Card";

function Business(props) {

    return (
    <Card style={{ width: '50vh' }} className="mb-3 shadow-sm border-none">
      <Card.Img variant="top" src={props.business.imageSrc} style={{height: "40vh", width: "100%", background: "#000000"}}/>
      <Card.Body>
        <Card.Title>{props.business.name}</Card.Title>
        <Card.Subtitle className={"mb-3 font-italic"}>{props.business.category}: {props.business.rating} stars</Card.Subtitle>
        <Card.Text>{props.business.address} {props.business.city}, {props.business.state} {props.business.zipCode}</Card.Text>
      </Card.Body>
    </Card>
    );
}

export default Business;