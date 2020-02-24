import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'
import Pokemons from '../db.json'


class PokemonPage extends React.Component {

  constructor() {
    super()
    this.state = {
      pokemonCol: [],
      searchTerm: ''
    }
  }

  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value 
    })
  }

 


  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onChange={this.handleSearch} />
        <br />
        <PokemonCollection pokemons={this.state.searchTerm !== '' ? this.state.pokemonCol : Pokemons.pokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
