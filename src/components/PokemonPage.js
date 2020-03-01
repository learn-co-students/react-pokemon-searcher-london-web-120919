import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const API = "http://localhost:3000/pokemon"



class PokemonPage extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemons: [],
      search: ''
    }
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(pokemons => this.setState({pokemons:pokemons}))
  }

  // toggleImage = () => {
  //   this.setState({
  //     switch: !this.state.switch
  //   })
  //   console.log('mariola')
  // }

  addToPokemons = (pokemon) => {
    this.setState({
      pokemons: [pokemon, ...this.state.pokemons]
    })
  }

  searchPokemon = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        < PokemonForm addToPokemons={this.addToPokemons} / >
        <br />
        <Search onChange={() => this.searchPokemon()} />
        <br />
        <PokemonCollection  pokemons={this.state.pokemons} />
      </Container>
    )
  }
}

export default PokemonPage
