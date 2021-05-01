import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Nav() {

    const LinkStyle = {
        textDecoration:'none',
        color:'black',
        fontSize:"medium"
    }
    return (
        <div>
            <Container style={{marginTop:'40px'}}>
                <div style={{backgroundColor:"#A485F4",padding:"20px",borderRadius:"40px"}}>
                    <Row>
                        <Col >
                            <Link to='/' style={LinkStyle}>Price</Link>
                        </Col>
                        <Col>
                            <Link to='/percent' style={LinkStyle}>Percent</Link>
                        </Col>
                        <Col>
                            <Link to='/periodicprice' style={LinkStyle}>Periodic</Link>
                        </Col>
                        <Col>
                            Marketcap
                        </Col>
                        <Col>
                            Dominence
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Nav
