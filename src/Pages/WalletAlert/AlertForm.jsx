import React from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'

function AlertForm() {

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
                                <Form.Label className="col form-label">Wallet Price</Form.Label>
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
                                <Form.Label className="col form-label">Give Wallet a Nickname</Form.Label>
                            <Col>
                                <Form.Control type="text" style={inputStyle}/>                            
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

                        <Form.Group as={Row} style={{marginTop:"20px"}}>
                        <Form.Label className="col form-label"></Form.Label>
                            <Col>
                                <Form.Check label="Ignore ERC-20 tokens in ETH Wallet"/>                          
                            </Col>
                        </Form.Group> 

                        <Form.Group as={Row}>
                        <Form.Label className="col form-label"></Form.Label>
                            <Col>
                                <Form.Check label="Disable this Alert After it triggers once"/>                           
                            </Col>
                        </Form.Group>

                        <Row className='justify-content-center'>
                            <h6>Looking For Additional Features ?</h6>
                        </Row>

                        <Row className='justify-content-center'>
                            <Button 
                                style={{
                                    backgroundImage:"linear-gradient(to right,grey,white)",
                                    color:"black",
                                    border:'1px solid black',
                                    borderRadius:"20px",
                                    width:"150px",
                                    marginTop:"20px"
                                    }}>Let us Know</Button>
                        </Row>
                    </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AlertForm
