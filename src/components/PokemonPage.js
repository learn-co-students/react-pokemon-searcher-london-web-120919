import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemonColl: [],
    filter: ""
  }

componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(response => response.json())
    .then(json => this.setState({
      pokemonColl: json
    }))
}


filterPokemon = (e) => {
  this.setState({
    filter: e.target.value
  })
}

getPokemon = () => {
  if (this.state.filer === "") {
    return this.state.pokemonColl
  }
  else {
    return this.state.pokemonColl.filter(pokemon => pokemon.name.includes(this.state.filter))
  }
}

addNewPokemon = (newPokemon) => {
  this.setState({
    pokemonColl: [...this.state.pokemonColl, newPokemon]
  })
}



  render() {
    

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm newPokemon={this.addNewPokemon}/>
        <br />
        <Search onChange={this.filterPokemon} />
        <br />
        <PokemonCollection pokemons={this.getPokemon()}/>
      </Container>
    )
  }
}

export default PokemonPage
