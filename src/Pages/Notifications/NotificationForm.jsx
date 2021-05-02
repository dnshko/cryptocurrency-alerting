import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Col, Row } from 'react-bootstrap';
import { MenuItem } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));


function NotificationForm() {

    const classes = useStyles();
    
    return (
        <Container>
            <form noValidate autoComplete="off" style={{height:"70vh"}}>
                <Row className="justify-content-center">
                    <Col className="col-md-6">
                        <Row style={{marginTop:"20px"}}>
                            <Col md={0} sm={0}>
                            </Col>
                            <Col lg={6} sm={6} md={6}>
                                <TextField fullWidth label="Email" id="email"/>
                            </Col>
                            <Col lg={3} sm={3} md={3}>
                                <Button variant="contained" color="secondary">Set</Button>                            
                            </Col>
                        </Row>

                        <Row style={{marginTop:"20px"}}>
                            <Col>
                                <TextField variant="outlined" fullWidth select placeholder="+1">
                                    <MenuItem value="+1">+1</MenuItem>
                                    <MenuItem value="+81">+81</MenuItem>
                                    <MenuItem value="+91">+91</MenuItem>
                                </TextField>
                            </Col>
                            <Col lg={6}>
                                <TextField fullWidth label="Phone Number" id="phn"/>
                            </Col>
                            <Col lg={3}>
                                <Button variant="contained" color="secondary">Set</Button>                            
                            </Col>
                        </Row>

                        <Row style={{marginTop:"20px"}}>
                            <Col>
                            </Col>
                            <Col lg={6}>
                                <TextField fullWidth label="User Key" id="userkey"/>
                            </Col>
                            <Col lg={3}>
                                <Button variant="contained" color="secondary">Set</Button>                            
                            </Col>
                        </Row>

                        <Row style={{marginTop:"20px"}}>
                            
                            <Col>
                                <TextField variant="outlined" fullWidth select placeholder="+1">
                                    <MenuItem value="+1">+1</MenuItem>
                                    <MenuItem value="+81">+81</MenuItem>
                                    <MenuItem value="+91">+91</MenuItem>
                                </TextField>
                            </Col>
                            <Col lg={6}>
                                <TextField fullWidth label="Phone Number" id="phn"/>
                            </Col>
                            <Col lg={3}>
                                <Button variant="contained" color="secondary">Set</Button>                            
                            </Col>
                        </Row>

                        <Row  style={{marginTop:"20px"}}>
                            <Col>
                            </Col>
                            <Button variant="outlined" color="secondary" startIcon={<Icon className="fa fa-building" color="secondary" />}>
                                 Enable Browser Notifications
                            </Button>
                            <Col>
                            
                            </Col>
                        </Row>
                        <Row style={{marginTop:"20px"}}>
                            <Col>
                            </Col>
                            <Col lg={6}>
                                <TextField fullWidth label="URL" id="url"/>
                            </Col>
                            <Col lg={3}>
                                <Button variant="contained" color="secondary">Set</Button>                            
                            </Col>
                        </Row>
                        
                        
                    </Col>
                </Row>
            </form>
        </Container>
    )
}

export default NotificationForm
