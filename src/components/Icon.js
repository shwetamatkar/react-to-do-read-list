import React, { Component } from 'react';

class Icon extends Component {
   
    render() {
        
        return (
            <i className={'fas fa-'+(this.props.icon)}></i>
            
        )
    }
}

export default Icon;
