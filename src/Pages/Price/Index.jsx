import React from 'react'
import Content from '../../Components/Content'
import AlertForms from '../../Components/AlertForms'
function Index() {
    return (
        <div style={{padding:"30px"}}>
            <Content heading1 = 'Price Alert' heading2='Get Notified When a Coin goes above or below a price target'/>
            <AlertForms/>
        </div>
    )
}

export default Index
