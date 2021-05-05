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
                            <Link to='/wallet' style={LinkStyle}>Wallet</Link>
                        </Col>
                        <Col>
                            <Link to='/percent' style={LinkStyle}>ETH Gas</Link>
                        </Col>
                        <Col>
                            <Link to='/periodicprice' style={LinkStyle}>Mempool</Link>
                        </Col>
                        <Col>
                            Block Chain
                        </Col>
                    </Row>
                </div>
                <div style={{marginTop:"20px"}}>
                <h3>
                  Wallet Watch Alert
               </h3>
               <h6>
                    Get Notified When a Coin goes above or below a price target
               </h6>
               </div>
            </Container>
        </div>
    )
}

export default Nav
