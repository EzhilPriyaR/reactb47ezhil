import React from 'react'
import { Card, CardGroup } from "react-bootstrap";

function CardDashboard() {
    return (
        <div id='cardDiv'>
            <CardGroup>
                <Card>
                    <Card.Body id='cardBody'><span id='sapnOne'>8</span> Not Started<div>Tasks</div></Card.Body>
                </Card>
                <Card>
                    <Card.Body id='cardBody'><span id='spanTwo'>7</span> In Progress<div>Tasks</div></Card.Body>
                </Card>
                <Card>
                    <Card.Body id='cardBody'><span id='spanThree'>13</span> Testing<div>Tasks</div></Card.Body>
                </Card>
                <Card>
                    <Card.Body id='cardBody'><span id='spanFour'>11</span> Cancelled<div>Tasks</div></Card.Body>
                </Card>
                <Card>
                    <Card.Body id='cardBody'><span id='spanFive'>21</span> Complete<div>Tasks</div></Card.Body>
                </Card>
                <Card>
                    <Card.Body id='cardBody'><span id='spanSix'>16</span> Pending<div>Tasks</div></Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}

export default CardDashboard