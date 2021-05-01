import React from 'react'
import { Container } from 'react-bootstrap'

function Content(props) {
    return (
        <div>
           <Container>
               <h3>
                   {props.heading1}
               </h3>
               <h6>
                   {props.heading2}
               </h6>
           </Container>
        </div>
    )
}

export default Content
