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
    Alert
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
                                        <Alert  className="text-white bg-primary text-center">
                                        Get Notified when a coin goes above or below a price target
                                        </Alert>
                                    </Col>
                                    <Col lg="6" className="container">
                            <Card >
                                <CardBody>
                                    <AvForm className="custom-validation">

                                    <AvField
                                        name="Min_Length"
                                        label="Min Length  "
                                        placeholder="Min 6 chars"
                                        type="number"
                                        errorMessage="Min 6 chars."
                                        validate={{
                                            required: { value: true },
                                            minLength: { value: 6, errorMessage: "Min 6 chars." }
                                        }}
                                    />
                                    <AvField
                                        name="Max_Length"
                                        label="Max Length  "
                                        placeholder="Max 6 chars"
                                        type="number"
                                        errorMessage="Max 6 chars."
                                        validate={{
                                            required: { value: true },
                                            maxLength: { value: 6, errorMessage: "Max 6 chars." }
                                        }}
                                    />
                                        <AvField
                                            name="Range_Value"
                                            label="Range Length  "
                                            placeholder="Text between 5 - 10 chars length"
                                            type="number"
                                            errorMessage="range between 5 to 10"
                                            validate={{ required: { value: true } }}
                                        />
                                        <AvField
                                            name="Min_Value1"
                                            label="Min Value"
                                            placeholder="Min value is 6"
                                            min={6}
                                            type="number"
                                            errorMessage="This value should be greater than or equal to 6."
                                            validate={{
                                                required: { value: true },
                                                min: { value: 6 }
                                            }}
                                        />
                                        <AvField
                                            name="Max_Value1"
                                            label="Max Value"
                                            placeholder="Max value is 6"
                                            min={6}
                                            type="number"
                                            errorMessage="This value should be less than or equal to 6."
                                            validate={{
                                                required: { value: true },
                                                max: { value: 6 }
                                            }}
                                        />
                                        <AvField
                                            name="Min_Value"
                                            label="Range Value"
                                            placeholder="Number between 6 - 100"
                                            min={6}
                                            type="number"
                                            errorMessage="This value should be between 6 and 100."
                                            validate={{
                                                required: { value: true },
                                                min: { value: 6 },
                                                max: { value: 100}
                                            }}
                                        />
                                        <AvField
                                            name="Regular_Exp"
                                            label="Regular Exp  "
                                            placeholder="Hex. Color"
                                            type="number"
                                            errorMessage="Hex Value"
                                            validate={{
                                                required: { value: true },
                                                pattern: {
                                                value: "^[#0-9]+$",
                                                errorMessage: "Only Hex Value"
                                                }
                                            }}
                                            />

                                        <div className="form-group mb-0">
                                            <div>
                                                <Button type="submit" color="primary" className="waves-effect waves-light mr-1">
                                                    Submit
                                                </Button>
                                                <Button type="reset" color="secondary" className="waves-effect">
                                                    Cancel
                                                </Button>
                                            </div>
                                        </div>
                                    </AvForm>

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