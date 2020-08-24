import React, { Component } from 'react';

import Icon from '../Icon.js';
import {
    ActionAnimations,
    SwipeableListItem
} from '@sandstreamdev/react-swipeable-list';

class ToDoListItem extends Component {
    render() {
        return (
            <div>
                <SwipeableListItem
                    
                    swipeLeft={{
                        content: <span className="text-uppercase font-weight-bold"  onClick={() => {this.props.onComplete(this.props.id)}}>Completed</span>,
                        action: () => { this.props.onComplete(this.props.id) }
                    }} 
                >
                    <div className="card m-3 justify-content-center shadow col-12">
                        <div className="row no-gutters col-xs-12">
                            <div className="col-sm-8 col-md-8 col-lg-8">
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold">{this.props.title}</h5>
                                    <p className="card-text text-muted">{this.props.description}</p>
                                    <p className="card-text">
                                        <small className={"font-weight-bold " + (this.props.isExpired ? 'text-success' : 'text-danger')}>{this.props.time}</small>
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-4 d-flex bg-gradient card-icon-wrap">
                                <h4 className="card-img align-self-center text-center">
                                    <Icon {...this.props} />
                                </h4>
                            </div>
                        </div>
                    </div>
                </SwipeableListItem>
            </div>
        )
    }
}
export default ToDoListItem;
