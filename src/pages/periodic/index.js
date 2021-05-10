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
import Swal from 'sweetalert2';
import axios from 'axios';

class Periodic extends Component {
    constructor(props) {
        super(props);
        this.state = {
                    Choose_Coin:"",
                    Alert_me_on:"",
                    When_price_of_coin:"",
                    Goes:"",
                    by:"",
                    COLLDOWN:"",
                    Add_a_note:"",
                    by_currency:"",
            breadcrumbItems : [
                { title : "CA", link : "#" },
                { title : "Periodic", link : "#" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Periodic Price alert", this.state.breadcrumbItems);
        
    }

        handleChange = (e) => {
        e.preventDefault();
        const { name,value } = e.target;
        this.setState({ 
            [e.target.name]: e.target.value
            });
        }

        handleSubmit=(e) => {
            e.preventDefault();
            const {
                    Choose_Coin,
                    Alert_me_on,
                    When_price_of_coin,
                    Goes,
                    by,
                    COLLDOWN,
                    Add_a_note,
                    by_currency
            } = this.state

            axios.post(`http://127.0.0.1:8000/api/price/`, { 
                    Choose_Coin,
                    Alert_me_on,
                    When_price_of_coin,
                    Goes,
                    by,
                    COLLDOWN,
                    Add_a_note,
                    by_currency
             })
            .then(function (response)  {
                    Swal.fire({
                    icon:"success",
                    text:"Client Added", 
                    title:"success"})
            }) 
            .catch(function (error)  {
                console.log(error);
            })         
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
                                    <Label className="col-sm-6 col-form-label">Choose Coin</Label>
                                    <Col sm="6">
                                        <Input className="form-control" type="text" defaultValue=""
                                        value={this.state.Choose_Coin}
                                        name="Choose_Coin"
                                        onChange={this.handleChange}
                                         />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label  className="col-sm-6 col-form-label">Alert me on</Label>
                                    <Col sm="6">
                                        <Input className="form-control" type="text" defaultValue=""
                                        value={this.state.Alert_me_on}
                                        name="Alert_me_on"
                                        onChange={this.handleChange}
                                         />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label className="col-sm-6 col-form-label">When price of coin</Label>
                                    <Col sm="6">
                                        <Input className="form-control" type="text" defaultValue="" 
                                        value={this.state.When_price_of_coin}
                                        name="When_price_of_coin"
                                        onChange={this.handleChange}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                <Label  className="col-sm-6 col-form-label">Goes</Label>
                                <Col sm="6 text-center">
                                <ul class="radio-switch">
                                    <li class="radio-switch__item">
                                        <input class="radio-switch__input sr-only" type="radio"  id="radio1"
                                        value="Above"
                                        onChange={this.handleChange}
                                        name="Goes"
                                        />
                                        <label class="radio-switch__label" for="radio1">
                                            <span>
                                            <svg width="15" height="15" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 24L24 6L43 24H31V42H17V24H5Z" fill="#417505" stroke="#417505" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                            </span>Above</label>
                                    </li>
                                    <li class="radio-switch__item">
                                        <input class="radio-switch__input sr-only" type="radio"  id="radio2"
                                        value="Below"
                                        onChange={this.handleChange}
                                        name="Goes"
                                         />
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
                                            <Label className="col-sm-6 col-form-label">By</Label>
                                           <Col sm="6">
                                           <InputGroup>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={this.state.by}
                                                    name="by"
                                                    onChange={this.handleChange}
                                                    
                                                />
                                                <div className="input-group-append">
                                                    <span className="input-group-text col-sm-3">%</span>
                                                <Input type="select" name="select" id="exampleSelect" onChange={this.handleChange} name="by_currency">
                                                <option value="USD">USD </option>
                                                <option value="INR">INR</option>
                                                </Input>
                                                </div>
                                            </InputGroup>
                                           </Col>
                                        </FormGroup>
                                            <FormGroup row>
                                                <Label for="example-search-input" className="col-sm-6 col-form-label">COLLDOWN</Label>
                                                <Col sm="6">
                                                <Input className="form-control" type="time" defaultValue="13:45:00" id="example-time-input"
                                                value={this.state.COLLDOWN}
                                                name="COLLDOWN"
                                                onChange={this.handleChange}
                                                />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Label for="example-search-input" className="col-sm-6 col-form-label">Add a note</Label>
                                                <Col sm="6">
                                                    <Input className="form-control" type="" defaultValue="" id="example-search-input"
                                                    value={this.state.Add_a_note}
                                                    name="Add_a_note"
                                                    onChange={this.handleChange}
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <Col  className="text-center">
                                        <Button type="button" color="primary" className="waves-effect waves-light" onClick={this.handleSubmit}>Set Alert</Button>
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

export default connect(null, { setBreadcrumbItems })(Periodic)