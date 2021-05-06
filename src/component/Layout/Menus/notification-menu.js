import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu, Media } from 'reactstrap';

//Import Scrollbar
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

class NotificationMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications : [
                { id : 1, icon : "mdi-message", title : "New Message received", desc : "welcome" },
            ],
            menu: false,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            menu: !prevState.menu
        }));
    }

    render() {
        return (
            <React.Fragment>
                    <Dropdown isOpen={this.state.menu} toggle={this.toggle} className="d-inline-block ml-1">
                        <DropdownToggle
                            className="btn header-item noti-icon waves-effect"
                            tag="button"
                            id="page-header-notifications-dropdown"
                        >
                            <i className="ti-bell"></i>
                            <span className="badge badge-danger badge-pill">1</span>
                        </DropdownToggle>
                            <DropdownMenu right className="dropdown-menu-lg p-0">
                                <div className="p-3">
                                    <Row className="align-items-center">
                                        <Col>
                                            <h5 className="m-0"> Notifications  </h5>
                                        </Col>
                                    </Row>
                                </div>
                                <PerfectScrollbar style={{height : "230px"}}>
                                    {
                                        this.state.notifications.map((notification, key) =>
                                            <Link key={key} to="#" className="text-reset notification-item">
                                                <Media>
                                                    <div className="avatar-xs mr-3">
                                                        <span className="avatar-title border-success rounded-circle ">
                                                            <i className={"mdi " + notification.icon}></i>
                                                        </span>
                                                    </div>
                                                    <Media body>
                                                        <h6 className="mt-0 mb-1">{notification.title}</h6>
                                                        <div className="text-muted">
                                                            <p className="mb-1">{notification.desc}</p>
                                                        </div>
                                                    </Media>
                                                </Media>
                                            </Link>
                                        )
                                    } 
                            </PerfectScrollbar>
                            <div className="p-2 border-top">
                                <Link className="btn btn-sm btn-link font-size-14 btn-block text-center" to="#">
                                    View all
                                </Link>
                            </div>
                        </DropdownMenu>
                    </Dropdown>
            </React.Fragment>
        );
    }
}

export default NotificationMenu;