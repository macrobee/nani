import React, { Component } from 'react';
import hangout from '../Images/hangout.jpg';

class Main extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div id="main">
                <h2>Hello this is the main page</h2>
                <img src={hangout} width="500px" className="photo-large" alt="nani kids hanging out" />
                
            </div>
        )
    }
}
export default Main;