import React, {
    Component,
    Fragment
} from 'react';
// import logo from './logo.svg';
import Form from './components/Form'
import Message from './components/Message'
class App extends Component {
    constructor() {
        super();
        this.state = {
            comments: [],
            name: '',
            lastname: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }
    handleSubmit = (e) => {
        e.preventDefault()
        e.target.reset()
        let comment = {
            name: this.state.name,
            lastname: this.state.lastname
        }
        this.addNewComment(comment)
    }
    addNewComment = (comment) => {
        this.setState({
            comments: [...this.state.comments, comment]
        })
    }
    renderComments() {
        return this.state.comments.map(comment => < Message name = {
                comment.name
            }
            lastname = {
                comment.lastname
            }
            />)
        }
        render() {
            return ( <
                Fragment >
                <
                Form handleSubmit = {
                    this.handleSubmit
                }
                handleChange = {
                    this.handleChange
                }
                /> {
                    this.renderComments()
                } <
                /Fragment>
            )
        }
    }
    export default App;
                
                
                import React, { Component } from 'react';
// import logo from './logo.svg';
class Form extends Component {
  render() {
    return(
        <div>
        <form onSubmit={(e) => this.props.handleSubmit(e)}>
            <label>Name:</label>
            { /* If the value of either of the input fields changes, we call the handleChange method passed down by the parent component in props */ }
            <input type="text" name="name" onChange={(e) => this.props.handleChange(e)}/>
            <br/>
            <label>Lastname:</label>
            <input type="text" name="lastname" onChange={(e) => this.props.handleChange(e)}/>
            <br/>
            <input type="submit" value="Submit Details" />
      </form>
    </div>
    )
              }
            }
            export default Form;
            
///////////////////////////////////////////</Fragment>////////////////////////
                
                
import React, {
    Component
} from 'react';
// import logo from './logo.svg';
class Form extends Component {
    render() {
        return ( <
            div >
            <
            form onSubmit = {
                (e) => this.props.handleSubmit(e)
            } >
            <
            label > Name: < /label> {
                /* If the value of either of the input fields changes, we call the handleChange method passed down by the parent component in props */ } <
            input type = "text"
            name = "name"
            onChange = {
                (e) => this.props.handleChange(e)
            }
            /> <
            br / >
            <
            label > Lastname: < /label> <
            input type = "text"
            name = "lastname"
            onChange = {
                (e) => this.props.handleChange(e)
            }
            /> <
            br / >
            <
            input type = "submit"
            value = "Submit Details" / >
            <
            /form> <
            /div>
        )
    }
}
export default Form;