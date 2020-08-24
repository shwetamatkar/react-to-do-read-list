import React, { Component } from 'react';
import ToDoListItem from './ToDoListItem.js';
import {SwipeableList} from '@sandstreamdev/react-swipeable-list';


class ToDoList extends Component {
   
    handleDelete = (id) => {
        const newTodoList = this.props.todos.filter((todo) => {
            if(todo.id !== id) return todo;
          });
        this.props.setToDos(newTodoList);
        
        return console.log(id+":completed");
    }
    
    render() {
        return (
            <SwipeableList>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 my-auto">
                    {
                    (this.props.todos.length) ?
                    this.props.todos.map((data) => {
                        return (
                            <ToDoListItem key={data.id} {...data}  onComplete={this.handleDelete.bind(this)} > </ToDoListItem>
                        );
                    }) : <div className="display-4 text-muted text-center m-5">No Todos Found</div>}
                </div>
            </SwipeableList>
        )
    }
}
export default ToDoList;