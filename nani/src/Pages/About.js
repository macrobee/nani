import React, { Component } from 'react';
import hangout from '../Images/hangout.jpg';

class About extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div id="about">
                <h2>Hello this is the about page</h2>
                <img src={hangout} width="500px" alt="nani kids hanging out"/>
                
            </div>
        )
    }
}
export default About;