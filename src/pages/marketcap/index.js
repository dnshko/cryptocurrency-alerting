import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    Col,
    Row,
    Card,
    CardBody,
    Table
  } from "reactstrap";
//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";


class Marketcap extends Component {
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

                                </CardBody>
                            </Card>
                        </Col>

                    </Row>
                              
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Marketcap)