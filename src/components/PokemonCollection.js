import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {


renderAllPokemon = (pokemons) => {
  return pokemons.map(pokemon =>( <PokemonCard pokemon={pokemon} key={pokemon.id} />))
}


  render() {
    
    return (
      <Card.Group itemsPerRow={6}>

        {this.renderAllPokemon(this.props.pokemons)}

      </Card.Group>
    )
  }
}

export default PokemonCollection
