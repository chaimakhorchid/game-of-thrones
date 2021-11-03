import React, { Component } from 'react'

class Add extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            price: 0
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
    }

    handleNameChange(e){
        this.setState({ name:e.target.value })

    }

    handlePriceChange(e){
        this.setState({ price:e.target.value })
    }


    render() {
        const { addItem } = this.props
        return (
            <div>
                <h1>Add</h1>
                <input type="text" onChange={this.handleNameChange}></input>
                <input type="range" min="0" max="10" onChange={this.handlePriceChange}></input>
                <span onChange={this.state.price}></span>
                <button className="btn btn-success ms-5" onClick={() => addItem(this.state.name, this.state.price)}>Add</button>
                
                
            </div>
        )
    }
}
export default Add
