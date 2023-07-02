import React from 'react'
import { Form, InputGroup, Button, Image } from "react-bootstrap"
import { Search, Moon, Bell, Messenger, Calendar } from "react-bootstrap-icons"
import adminImage from "./../Assets/Images/adminImage.jpeg"
import CardDashboard from "./CardDashboard"
import ProjectTable from "./ProjectTable"

function Dashboard() {

    return (
        <div className='main'>
            <div>
                <InputGroup>
                    <Form.Control size="sm" type="text" placeholder="Search..."></Form.Control>
                    <Button variant="secondary"><Search /></Button>
                    <Button id='icon-button' variant="secondary"><Moon /></Button>
                    <Button id='icon-button' variant="secondary"><Bell /></Button>
                    <Button id='icon-button' variant="secondary"><Messenger /></Button>
                    <Button id='icon-button' variant="secondary"><Calendar /></Button>
                    <Image id='image' src={adminImage} roundedCircle alt="Admin Image" />
                </InputGroup>
            </div>
            <div>
                <CardDashboard />
            </div>
            <div>
                <ProjectTable />
            </div>
        </div>
    )
}

export default Dashboard