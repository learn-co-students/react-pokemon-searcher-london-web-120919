import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  addNewPokemon = (e) => {
    // console.log(e)
    this.setState({
      [e.target.name] : [e.target.value]
    })
    // console.log(e.target.name)
  }
  
  handleSubmit = (e) => {
    const pokemon = {
      name: this.state.name,
      stats: [
        {name: "hp", value: this.state.hp}
      ],
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl
      }
    }
    e.target.reset()
    this.props.addToPokemons(pokemon)
  }

 



  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Group widths="equal">
            <Form.Input onChange={(e) => this.addNewPokemon(e)} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input onChange={(e) => this.addNewPokemon(e)} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input onChange={(e) => this.addNewPokemon(e)} fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input onChange={(e) => this.addNewPokemon(e)} fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
