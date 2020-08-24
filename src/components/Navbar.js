import React, { Component } from 'react';

class Navbar extends Component {
    
    setActive = (val) =>{
        
        this.props.setActiveTab(val);
    }
    render() {
        let self= this;
        return (
            <ul className="nav nav-pills nav-fill m-3 mt-5 mb-4 text-uppercase">
                <li className={'nav-item btn '+(self.props.activeTab ==='to-do' ? 'btn-outline-light' : '')} onClick={self.setActive.bind(self,'to-do')}>
                    <span className="font-weight-bold">To Do</span>
                </li>
                <li className={'nav-item btn '+(self.props.activeTab !=='to-do' ? 'btn-outline-light' : '')} onClick={self.setActive.bind(self,'to-read')}>
                     <span className="font-weight-bold">To Read</span>
                </li>
                
          </ul>
        )
    }
}
export default Navbar;
