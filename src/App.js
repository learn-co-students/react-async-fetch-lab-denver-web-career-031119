// create your App component here

import React from 'react';
import Container from './Container'




class App extends React.Component{
  state = {
    people: []
  }

  async componentDidMount(){
    const response = await fetch('http://api.open-notify.org/astros.json')
    const result = await response.json()
    this.setState({people:result.people})
  }


  render(){
    return(
      <div>
        <h1>Working</h1>
        <Container people={this.state.people}/>
      </div>
    )
  }
}

export default App;
