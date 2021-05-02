import React from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'

function AlertForms() {

    const inputStyle = {
        borderRadius: "30px",
        border: "2px solid pink",
        height: "38px"
    }
    return (
        <div style={{marginTop:"20px"}}>
            <Container>
                <Row className="row justify-content-center">
                    <Col className="col-md-6">
                    <Form>
                        <Form.Group as={Row}>
                            <Form.Label className="col form-label">Choose Coin</Form.Label>
                            <Col>
                                <Form.Control type="text" style={inputStyle}/>                            
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label className="col form-label">Alert Me on</Form.Label>
                            <Col>
                                <Form.Control type="text" style={inputStyle}/>                            
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                                <Form.Label className="col form-label">When Price of a Coin</Form.Label>
                            <Col>
                                <Form.Control type="text" style={inputStyle}/>                            
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                                <Form.Label className="col form-label">Goes</Form.Label>
                            <Col>
                                <Form.Control type="text" style={inputStyle}/>                            
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                                <Form.Label className="col form-label">By</Form.Label>
                            <Col>
                                <Form.Control type="text" style={inputStyle}/>                            
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label className="col form-label">COOLDOWN</Form.Label>
                            <Col>
                                <Form.Control type="text" placeholder="1 Hour" style={inputStyle}/>                            
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Col>
                                <Form.Label className="col form-label">Add Note</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control type="text" style={inputStyle}/>                            
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                                <Form.Label className="col form-label"></Form.Label>
                            <Col>
                                <Form.Check label="Disable this Alert After it triggers once"/>
                                <br/>
                                <span>% We  Also Support Volatility Alerts for large price movements</span>                            
                            </Col>
                        </Form.Group>
                        <Row className='justify-content-center'>
                            <Button 
                                style={{
                                    backgroundImage:"linear-gradient(to right,grey,white)",
                                    color:"black",
                                    border:'1px solid black',
                                    borderRadius:"20px",
                                    width:"100px",
                                    marginTop:"20px"
                                    }}>Set Alert</Button>
                        </Row>
                    </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AlertForms
