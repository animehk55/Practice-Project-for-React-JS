import React, { Component } from 'react';
import Person from './Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          Hello we are working on props
          <br />
          <div className="box">
          <Person name = "Animesh" age = "435" />
          </div>
          <div className="box">
          <Person name = "An2222imesh" age = "454" />
          </div>
          <div className="box">
          <Person name = "Animes5623h" age = "465" />
          </div>
          <div className="box">
          <Person name = "Ajhgjhnimesh" age = "457" />
          </div>
          <div className="box">
          <Person name = "Animefafadfssh" age = "405">fadsfdsfadffdsfsdfa</Person>
          </div>
          <div className="box">
          <Person name = "Anidfsfdfsfdfdmesh" age = "485" />
          </div>
      </div>
    );
  }
}

export default App;
