import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor() {
    super()
    this.state = {
     image: true
    }
  }

  toggleImage = () => {
    this.setState({
      image: !this.state.image
    })
  }


  render() {

    const {name , frontImg ,stats, backImg} = this.props
    return (
      <Card>
        <div onClick={this.toggleImage}>
          <div className="image">
            <img src={this.state.image ? frontImg : backImg } alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
                hp: {stats.find(stat => stat.name === 'hp').value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
