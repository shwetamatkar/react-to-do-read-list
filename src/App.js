import React, { Component } from 'react';
import ToDoList from './components/ToDo/ToDoList';
import ToReadList from './components/ToRead/ToReadList';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import './App.css';
import ToDoData from './components/ToDo/ToDoListData.js';

class App extends Component {
  constructor(props)
  {
      super(props);
      this.state={
          'todos':ToDoData,
          'activeTab':'to-do'
      };
  }
  setToDos = (arr) =>{
    //update to-do list
    this.setState({todos: arr});
  } 
  setActiveTab = (val) =>{
    //update active tab
    this.setState({activeTab: val});
  } 
  render() {
      return (
        <div className="container-fluid bg-grey p-2 p-sm-5">
          
          <header >
            <h3 className="text-center">ACTION ITEMS</h3> 
            <Navbar setActiveTab={this.setActiveTab} activeTab={this.state.activeTab}/>
          </header>
          <div className="row h-100">
              {this.state.activeTab === 'to-do' ? <ToDoList setToDos ={this.setToDos.bind(this.state.todos)} todos={this.state.todos}/> : <ToReadList/>}
          </div>
       </div>
      )
  }
}

export default App;
