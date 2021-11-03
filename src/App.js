import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import Button from "./components/Button"
import List from './components/List'
import Add from './components/Add'
import Pay from './components/Pay'

class App extends Component {
  constructor(){
    super()
    this.state = {
      activeTab: "add",
      items: []
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(string){
    console.log(string)
  }

  addItem(name, price){
    const item = {
      name,
      price
    }
    this.setState({items:[item,...this.state.items]})
  }


  render() {
    return (
      <div className="container my-5">
        <h1 className="mb-5">Bakery</h1>
        <Button
        children="Add" 
        handleButtonClick={this.handleButtonClick}
        isSelected={this.state.activeTab === "Add"}
        />    
        <Button
        children="List" 
        handleButtonClick={this.handleButtonClick}
        isSelected={this.state.activeTab === "List"}
        />
        <Button
        children="Pay" 
        handleButtonClick={this.handleButtonClick}
        isSelected={this.state.activeTab === "Pay"}
        />   
         {this.state.activeTab === "Add" && <Add addItem={this.addItem}/>}
        {this.state.activeTab === "List" && <List />}
        {this.state.activeTab === "Pay" && <Pay />}  
      </div>

    )
  }
}


export default App;
