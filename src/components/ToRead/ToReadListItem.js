import React, { Component } from 'react';
import Icon from '../Icon.js';

class ToDoListItem extends Component {
   
    render() {
        return (

            <div className="m-3 justify-content-center read-card-container">
                <div className="card bg-light shadow-lg read-card-first">
                    <div style={{backgroundImage:"url("+this.props.img+")"}} className="card-img img-fluid read-card-img" title={this.props.title}></div>
                    <div className="card-img-overlay p-0 ">
                        <h5 className="card-title bg-gradient read-card-no col-3 col-sm-2 col-lg-1 d-flex  text-center">
                            <p className="align-self-center m-0 p-0 col-12">{this.props.articleNo}</p>
                        </h5>
                    </div>
                </div>
                <div className="card mb-2 justify-content-end bg-light shadow-lg read-card-second">
                    <div className="row no-gutters col-12">
                        
                        <div className="col-8 col-sm-8 col-md-8 col-lg-8 d-flex">
                            <div className="card-body align-self-end p-1">
                                <p className="card-title font-weight-bold">{this.props.title}</p>
                                
                            </div>
                        </div>
                        <div className="col-4 col-sm-4 col-md-4 col-lg-4 d-flex ">
                            <h4 className="card-img align-self-end p-2 text-center">
                                <Icon icon="greater-than"/>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default ToDoListItem;
