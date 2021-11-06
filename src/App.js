import { getByTitle } from '@testing-library/dom'
import React from 'react'
import Character from './component/Character'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Favorites from './component/Favorites'
import Continents from './component/Continents'
import Personnages from './component/Personnages'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      characters: [],
      favorites:[]

    }
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this)
  }

  handleFavoriteClick(character){
    this.setState({favorites:[character,...this.state.favorites]})
  }

  componentDidMount(){
    fetch("https://thronesapi.com/api/v2/Characters")
    .then(response => response.json())  
    .then(result => {
      this.setState({characters: result})
  
    }) 
  } 
	render() {
    const {character, fullName} = this.props
    console.log(this.state)
		return(
      <div className="container">
			<h1>Game of thrones</h1>
      <Favorites/>
      <Personnages/>
      <Continents/>
      <div className="row">
        {this.state.characters.map((character, index) => (

       <Character 
       name={character.fullName} 
       title={character.title} 
       image={character.imageUrl}
       favoritesClick={this.handleFavoriteClick}
       character={character}
       key={index}

       />
       
      ))}
      
      </div>
      
      </div>
		)
	}
}

export default App