import React from 'react'
import { Route } from 'react-router-dom'
import Price from '../Pages/Price/Index'
import Percent from '../Pages/Percent/Index'
import PeriodicPrice from '../Pages/PerodicPrice/Index'
function Router() {
    return (
        <div>
            <Route exact path="/">
                <Price/>
            </Route>

            <Route exact path="/percent">
                <Percent/>
            </Route>
            
            <Route exact path="/periodicprice">
                <PeriodicPrice/>
            </Route>
        </div>
    )
}

export default Router
