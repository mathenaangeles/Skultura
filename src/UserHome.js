import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './stylesheets/UserHome.css';
export default function UserHome(){
    return(

        <div className = "UserHome">
            <div class="container">
                <h3>Juan Dela Cruz</h3>
                <p className="text-muted">Xavier School | 9-St. Andrew</p>
                <hr/>
                <h5>My Channels</h5>
            </div>
            <div className="card-container">
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title><b>Superstitious Beliefs</b></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Cebu City National Science High School</Card.Subtitle>
                <Card.Text>
                Discuss with Grade 9 students from Cebu City National Science High School on the superstitious beliefs in their community.
                </Card.Text>
                <a href="/chat"><Button variant="primary">Enter Channel</Button></a>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title><b>Family Values</b></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Davao City High School</Card.Subtitle>
                <Card.Text>
                Discuss with students from Davao City High School on their family values they believe are unique to their area.
                </Card.Text>
                <Button variant="primary">Enter Channel</Button>
            </Card.Body>
            <div id="shadow"></div>
            </Card>
            </div>
        </div>
    );
    
}