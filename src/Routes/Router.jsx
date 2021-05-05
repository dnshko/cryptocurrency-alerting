import React from 'react'
import { Route } from 'react-router-dom'
import Price from '../Pages/Price/Index'
import Percent from '../Pages/Percent/Index'
import PeriodicPrice from '../Pages/PerodicPrice/Index'
import NotificationForm from '../Pages/Notifications/NotificationForm'
import WalletForm from '../Pages/WalletAlert/Index' 
import Header from '../Components/Header'
import Nav from '../Components/Nav'
function Router() {
    return (
        <div>
            <Route exact path="/">
                <Header/>
                <Nav/>
                <Price/>
            </Route>

            <Route exact path="/percent">
            <Header/>
                <Nav/>
                <Percent/>
            </Route>
            
            <Route exact path="/periodicprice">
            <Header/>
                <Nav/>
                <PeriodicPrice/>
            </Route>

            <Route exact path="/notificationform">
                <Header/>
                <Nav/>
                <NotificationForm/>
            </Route>

            <Route exact path="/wallet">
                <Header/>
                <WalletForm/>
            </Route>
        </div>
    )
}

export default Router
