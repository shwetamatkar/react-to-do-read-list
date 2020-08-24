import React, { Component } from 'react';
import ToReadListItem from './ToReadListItem.js';
import ToReadList from './ToReadListData.js';


class ToDoList extends Component {

    render() {
        return (
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 my-auto">
              {ToReadList.map((data, key) => {
                return (
                  <ToReadListItem key={key} {...data}> </ToReadListItem>
                );
              })}
          </div>
            
        )
    }
}
export default ToDoList;