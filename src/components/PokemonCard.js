import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor() {
    super()
    this.state = {
      switch: true
    }
  }

  toggleImage = () => {
    this.setState({
      switch: !this.state.switch
    })
  }


  render() {
    // console.log(this.props.stats)
    const {img, name, backImg, stats} = this.props
    return (
      <Card>
        <div onClick={() => this.toggleImage()}>
          <div className="image">
            <img alt="oh no!" src={this.state.switch ? img : backImg} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              hp: {
                stats.find(stat => stat.name === 'hp').value
              }
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
