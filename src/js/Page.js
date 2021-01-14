import React from 'react'
//import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default class Home extends React.Component {
    constructor() {
      super();
      // this is basically your global variable, it will not change until you use setState
      this.state = {
        title: "Welcome"
      }
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <h2>{this.state.title}</h2>

            {/* call your imported js function and throw props into it, if props exist, it will do something based on the props, ctrl + click on AppendDDL to check*/}
            <Button type="submit">Click</Button>       
          </form>

          <div>
            <Button href="http://localhost:3000/">Back</Button>
          </div>
        </div>
      )
    }
  }