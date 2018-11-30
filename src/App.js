import React, { Component } from 'react';
import Person from './Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'animesh', age: 25 },
      { name: 'ram', age: 225 },
      { name: 'rahi,m', age: 275 },
      { name: 'shyam', age: 295 },
      { name: 'niishant', age: 2586525 },
      { name: 'abdul', age: 225 },
    ]
  }

    switchNameHandler = () => {
      console.log('Was clicked ');
    }

  render() {
    return (
      <div>
          Hello we are working on props
          <button onClick={this.switchNameHandler}>Button</button>
          <br />
          <div className="box">
          <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
          </div>
          <div className="box">
          <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} />
          </div>
          <div className="box">
          <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age} />
          </div>
          <div className="box">
          <Person name = {this.state.persons[3].name} age = {this.state.persons[3].age} />
          </div>
          <div className="box">
          <Person name = {this.state.persons[4].name} age = {this.state.persons[4].age}>fadsfdsfadffdsfsdfa</Person>
          </div>
          <div className="box">
          <Person name = {this.state.persons[5].name} age = {this.state.persons[5].age} />
          </div>
      </div>
    );
  }
}

export default App;
