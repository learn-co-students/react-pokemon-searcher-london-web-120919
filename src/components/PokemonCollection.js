import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  renderPokemons() {
    return this.props.pokemons.map(pokemon => < PokemonCard toggle={this.props.switch} toggleImage={this.props.toggleImage} name = {pokemon.name} img = {pokemon.sprites.front} stats = {pokemon.stats} backImg={pokemon.sprites.back}/> )
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
          {this.renderPokemons()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
