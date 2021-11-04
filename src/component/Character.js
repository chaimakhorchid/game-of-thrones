import React from 'react'

class Character extends React.Component {
    constructor(){
        super()

    }
	render() {
        const {title, image, name, favoritesClick, character} = this.props
		return(
                <div className="col-3 box">
                    <div className="character border rounded">
                        <img src={image}/> 
                    </div> 
                    <div className="pt-3 px-3 name">
			            <p>{name}</p>
                        <p>{title}</p>    
                    </div>
                    <button  className="btn btn-success ms-5" onClick={() => favoritesClick(character)}>ajouter aux favorites</button>
                </div>            
		)
	}
}

export default Character