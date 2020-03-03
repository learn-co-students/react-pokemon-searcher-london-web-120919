import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    cardSt: "front"
  }

  getPokemonSprite = () => {
      return this.props.pokemon.sprites[this.state.cardSt]
  }

  flipCard = () => {
    this.setState({
      cardSt: this.state.cardSt === "front" ? "back" : "front"
    })
  }
  
  render() {
    const { pokemon } = this.props

    return (
      <Card onClick={this.flipCard}>
        <div>
          <div className="image">
            <img src={this.getPokemonSprite()} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">
              {pokemon.name}
              </div>
          </div>
          <div className="extra content">
            <span>
              {pokemon.stats.find(stat => stat.name === "hp").value}
              <i className="icon heartbeat red" />
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
