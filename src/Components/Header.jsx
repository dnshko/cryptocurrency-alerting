import React from 'react'

function Header() {
    return (
        <div>
        <nav className="mb-1 navbar navbar-expand-lg navbar-dark" >
        <ul className="navbar-nav">
            <div style={{width:"100px",marginLeft:"50px"}}>
            <li className="nav-item">
                <h6>CRYPTOCURRENCY
                ---ALERT---
                EST. <i className="fa fa-bell-o"></i> 2018</h6>
            </li>
            </div>
        </ul>
        <ul className="navbar-nav ml-auto">
            <li className='na-item' style={{marginRight:"10px"}}>
                <i className="fa fa-user-o"></i>
            </li>
            <li className='nav-item' style={{marginRight:"10px"}}>
                <button >Sign up</button>
            </li>
            
        </ul>
        </nav>
            
        </div>
    )
}

export default Header
