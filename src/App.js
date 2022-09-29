import React from 'react';
import './App.css';
class App extends React.Component {

  constructor() {
    super();
    this.state = 
    {
      name: "Fuad",
      skill: "ReactJs"
    }

    this.handleChange  = (e) => {
      this.setState({
        name: e.target.value
      })
    }

    this.handleSubmit = (e) => {
      e.preventDefault();
      console.log('the form was submitted by', this.state.name)
    }

  }


  render() {

         return (
     <div className="App">
   <h1>  My name is {this.state.name} </h1>

      <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="enter name" onChange={this.handleChange}></input>
          <button>Submit</button>
      </form>

   </div>

      );
  }
}

export default App;
