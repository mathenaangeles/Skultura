import React from 'react';
import '../stylesheets/UserNavbar.css'
import {Navbar, Nav }from 'react-bootstrap';
import {Bell} from 'react-bootstrap-icons';

export default function UserNavbar(){
    return(
        <div className="UserNavbar">
            <Navbar className="custom-nav" variant="dark" expand="lg">
            <Navbar.Brand href="/home"><b>S</b>KULTURA</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/home">Channels</Nav.Link>
                <Nav.Link href="/search">Search</Nav.Link>
            </Nav>

            <Nav className="ml-auto">
                <Bell size={30}/>
            </Nav>

            </Navbar.Collapse>

            </Navbar>
        </div>
    )
}