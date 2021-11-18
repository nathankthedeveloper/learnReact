import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCard({item}){
    return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    )
}

function Home(props) {
    return (
        <div className="container">
            <div class="row">
                <div class="col-md m-1">
                    <RenderCard item={props.campsite} />
                </div>
            </div>
            <div class="row">
                <div class="col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
            </div>
            <div class="row">
                <div class="col-md m-1">
                    <RenderCard item={props.partner} />
                </div>
            </div>
            <h4>Home</h4>
        </div>
    );
}

export default Home; 