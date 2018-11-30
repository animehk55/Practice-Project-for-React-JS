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

  switchNameHandler = (newName) => {
    // console.log('Was clicked ');
    this.setState( {
        persons: [
          { name: 'this.setState-animesh-this.setState', age: 25 },
          { name: '.setState-animesh-this.s----ram---.setState-animesh-this.s', age: 225 },
          { name: 'rahi,m', age: 275 },
          { name: newName, age: 295 },
          { name: 'niishant', age: 2586525 },
          { name: 'abrtfyhnj5drftyuindul', age: 225 },
          ]
        }
      )
    }

    nameChangedHandler = (event) => {
      this.setState( {
          persons: [
            { name: 'this.setState-animesh-this.setState', age: 25 },
            { name: '.setState-animesh-this.s----ram---.setState-animesh-this.s', age: 225 },
            { name: 'rahi,m', age: 275 },
            { name: event.target.value, age: 295 },
            { name: 'niishant', age: 2586525 },
            { name: 'abrtfyhnj5drftyuindul', age: 225 },
            ]
          }
        )
      }
      togglePersonsHandler = () =>  {
        console.log('Was clicked ');
          const doesShow = this.state.showPerson;
          this.setState({showPerson: !doesShow});
      }

  render() {
    return (
      <div>
          Hello we are working on props
          <button onClick={this.togglePersonsHandler}>Button</button>
          {this.state.showPerson === true ? 
          <div>
              <br />
              <div className="box">
              <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
              </div>
              <div className="box">
              <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} />
              </div>
              <div className="box">
              <Person changed={this.nameChangedHandler} name = {this.state.persons[2].name} age = {this.state.persons[2].age} />
              </div>
              <div className="box">
              <Person 
              name = {this.state.persons[3].name} 
              age = {this.state.persons[3].age}
              changed={this.nameChangedHandler}
              />
              </div>
              <div className="box">
              <Person name = {this.state.persons[4].name} age = {this.state.persons[4].age}>fadsfdsfadffdsfsdfa</Person>
              </div>
              <div className="box">
              <Person 
              name = {this.state.persons[5].name} 
              age = {this.state.persons[5].age}
              click={this.switchNameHandler.bind(this, 'uhiuhifkafjioadsmfsa09jfo')} />
              </div>
          </div> : null }
      </div>
    );
  }
}

export default App;
