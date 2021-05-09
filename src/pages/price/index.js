import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    Col,
    Row,
    Card,
    CardBody,
    FormGroup,
    Label,
    Button,
    Alert,
    Input,
    InputGroup
  } from "reactstrap";
//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";
import { AvForm, AvField } from "availity-reactstrap-validation";


class Price extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "CA", link : "#" },
                { title : "price", link : "#" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("price page", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                
                <Row>
                        <Col xs="12">
                            <Card>
                                <CardBody>                                   
                                    <Col lg="12">
                                        <Alert  className="text-center" color="success">
                                        Get Notified when a coin goes above or below a price target
                                        </Alert>
                                    </Col>
                                    <Col lg="6" className="container">
                            <Card >
                                <CardBody>
                                <FormGroup row>
                                    <Label for="example-text-input" className="col-sm-6 col-form-label">Choose Coin</Label>
                                    <Col sm="6">
                                        <Input className="form-control" type="text" defaultValue="" id="example-text-input"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="example-search-input" className="col-sm-6 col-form-label">Alert me on</Label>
                                    <Col sm="6">
                                        <Input className="form-control" type="text" defaultValue="" id="example-search-input"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="example-search-input" className="col-sm-6 col-form-label">When price of coin</Label>
                                    <Col sm="6">
                                        <Input className="form-control" type="text" defaultValue="" id="example-search-input"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                <Label for="example-search-input" className="col-sm-6 col-form-label">Goes</Label>
                                <Col sm="6 text-center">
                                <ul class="radio-switch">
                                    <li class="radio-switch__item">
                                        <input class="radio-switch__input sr-only" type="radio" name="radioButton" id="radio1" checked />
                                        <label class="radio-switch__label" for="radio1">
                                            <span>
                                            <svg width="15" height="15" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 24L24 6L43 24H31V42H17V24H5Z" fill="#417505" stroke="#417505" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                            </span>Above</label>
                                    </li>
                                    <li class="radio-switch__item">
                                        <input class="radio-switch__input sr-only" type="radio" name="radioButton" id="radio2" />
                                        <label class="radio-switch__label" for="radio2">
                                            <span>
                                            <svg width="15" height="15" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 24L24 42L43 24H31V6H17V24H5Z" fill="#d0021b" stroke="#d0021b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                            </span>Below</label>
                                        <div aria-hidden="true" class="radio-switch__marker"></div>
                                    </li>
                                </ul>
                                </Col>
                                </FormGroup>
                                <FormGroup row>
                                            <Label className="col-sm-6 col-form-label">Example with postfix (large)</Label>
                                           <Col sm="6">
                                           <InputGroup>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={""}
                                                    placeholder="number"
                                                    
                                                />
                                                <div className="input-group-append">
                                                    <span className="input-group-text col-sm-3">%</span>
                                                <Input type="select" name="select" id="exampleSelect">
                                                <option>USD </option>
                                                <option>INR</option>
                                                </Input>
                                                </div>
                                            </InputGroup>
                                           </Col>
                                        </FormGroup>
                                            <FormGroup row>
                                                <Label for="example-search-input" className="col-sm-6 col-form-label">COLLDOWN</Label>
                                                <Col sm="6">
                                                <Input className="form-control" type="time" defaultValue="13:45:00" id="example-time-input"/>
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Label for="example-search-input" className="col-sm-6 col-form-label">Add a note</Label>
                                                <Col sm="6">
                                                    <Input className="form-control" type="" defaultValue="" id="example-search-input"/>
                                                </Col>
                                            </FormGroup>
                                            <Col  className="text-center">
                                        <Button type="button" color="primary" className="waves-effect waves-light">Set Alert</Button>
                                            </Col>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                              
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Price)