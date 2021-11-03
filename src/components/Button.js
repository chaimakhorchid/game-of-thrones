import React, { Children, Component } from 'react'

class Button extends Component {
    render() {
        const {handleButtonClick, isSelected, children} = this.props
        return (
            <div>
                <button 
                type="button" 
                className={`btn btn-outline-primary m-3
                ${isSelected && "bg-primary"}
                `}
                onClick={() => this.props.handleButtonClick(children)}
                >
                    {children}
                </button>
            </div>
        )
    }
}

export default Button
