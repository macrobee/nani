import React, { Component } from 'react';

class Nav extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div id="nav-bar">
                <div className="nav-item">Home</div>
                <div className="nav-item">About</div>
                <div className="nav-item">Cottage</div>
                <div className="nav-item">Meet the Kids</div>
                <div className="nav-item">Stretch Club</div>
            </div>
        )
    }
}
export default Nav;