import React, {useState} from 'react';
import {Tabs, Tab, Button, Card, Modal, Form, FormControl} from 'react-bootstrap';
import '../stylesheets/TeacherHome.css';
export default function TeacherHome(){
    const [show, setShow] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleRadioClick(x) {
        if (x === "Open"){
            setDisabled(true);
        }else{
            setDisabled();
        }
    }
    return(

        <div className="TeacherHome">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>New Channel</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicChannel">
                        <Form.Label>Channel Topic</Form.Label>
                        <Form.Control type="text" placeholder="Enter channel topic" />
                        <Form.Text className="text-muted">
                            Make a descriptive title for your channel topic.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasic">
                        <Form.Label>Description</Form.Label>
                        <FormControl as="textarea" rows="3"/>
                    </Form.Group>
                    <Form.Row>
                        <Form.Group controlId="formBasicCheckbox">
                        <Form.Check
                        
                        type="radio"
                        label="Make visible to all"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        onClick={()=>handleRadioClick("Open")}
                        />
                        <div>
                        <Form.Check
                        md="4"
                        type="radio"
                        label="Send invite to class"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        onClick={()=>handleRadioClick("Close")}
                        /> <Form.Control  md="4" type="text" placeholder="Enter classroom code" disabled={disabled}/>
                        </div>
                        </Form.Group>
                    </Form.Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Add
                </Button>
                </Modal.Footer>
            </Modal>
            <Tabs defaultActiveKey="Class1" id="uncontrolled-tab-example">
                <Tab eventKey="Class1" title="Class 1">
                    <Button variant ="info" onClick={handleShow}>Create New Channel</Button>
                    <div class="card-container">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title><b>Superstitious Beliefs</b></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">CCNHS2019-9-A</Card.Subtitle>
                            
                            <Card.Text>
                            Discuss with Grade 9 students from Cebu City National Science High School on the superstitious beliefs in their community.
                            </Card.Text>
                            <a href="/chat"><Button variant="primary">Enter Channel</Button></a>
                        </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title><b>Family Values</b></Card.Title>

                            <Card.Subtitle className="mb-2 text-muted">DCHS2019-8-A</Card.Subtitle>
                            <Card.Text>
                            Discuss with students from Davao City High School on their family values they believe are unique to their area.
                            </Card.Text>
                            <Button variant="primary">Enter Channel</Button>
                        </Card.Body>
                        </Card>
                    </div>
                </Tab>
                <Tab eventKey="Class2" title="Class 2">
                    <Button variant ="info" onClick={handleShow}>Create New Channel</Button>
                    <div class="card-container">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title><b>Superstitious Beliefs</b></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">CCNHS2019-9-B</Card.Subtitle>
                            <Card.Text>
                            Discuss with Grade 9 students from Cebu City National Science High School on the superstitious beliefs in their community.
                            </Card.Text>
                            <a href="/chat"><Button variant="primary">Enter Channel</Button></a>
                        </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title><b>Family Values</b></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">DCHS2019-8-B</Card.Subtitle>
                            <Card.Text>
                            Discuss with students from Davao City High School on their family values they believe are unique to their area.
                            </Card.Text>
                            <Button variant="primary">Enter Channel</Button>
                        </Card.Body>
                        </Card>
                        </div>
                </Tab>
                <Tab eventKey="Class3" title="Class 3">
                    <Button variant ="info" onClick={handleShow}>Create New Channel</Button>
                    <div class="card-container">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title><b>Superstitious Beliefs</b></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">CCNHS2019-9-C</Card.Subtitle>
                            <Card.Text>
                            Discuss with Grade 9 students from Cebu City National Science High School on the superstitious beliefs in their community.
                            </Card.Text>
                            <a href="/chat"><Button variant="primary">Enter Channel</Button></a>
                        </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title><b>Family Values</b></Card.Title>

                            <Card.Subtitle className="mb-2 text-muted">DCHS2019-8-C</Card.Subtitle>
                            <Card.Text>
                            Discuss with students from Davao City High School on their family values they believe are unique to their area.
                            </Card.Text>
                            <Button variant="primary">Enter Channel</Button>
                        </Card.Body>
                        </Card>
                        </div>
                </Tab>
            </Tabs>
            
        </div>
    )
}