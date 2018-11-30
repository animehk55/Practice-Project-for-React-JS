import React, { Component } from 'react';
import Person from './Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { id: '25', name: 'animesh', age: 25 },
      { id: '225', name: 'ram', age: 225 },
      {  id: '245', name: 'rahi,m', age: 275 },
      {  id: '255', name: 'shyam', age: 295 },
      {  id: '5', name: 'niishant', age: 2586525 },
      {  id: '285', name: 'abdul', age: 225 },
    ]
  }

  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked ');
  //   this.setState( {
  //       persons: [
  //         { name: 'this.setState-animesh-this.setState', age: 25 },
  //         { name: '.setState-animesh-this.s----ram---.setState-animesh-this.s', age: 225 },
  //         { name: 'rahi,m', age: 275 },
  //         { name: newName, age: 295 },
  //         { name: 'niishant', age: 2586525 },
  //         { name: 'abrtfyhnj5drftyuindul', age: 225 },
  //         ]
  //       }
  //     )
  //   }

    // nameChangedHandler = (event) => {
    //   this.setState( {
    //       persons: [
    //         { name: 'this.setState-animesh-this.setState', age: 25 },
    //         { name: '.setState-animesh-this.s----ram---.setState-animesh-this.s', age: 225 },
    //         { name: 'rahi,m', age: 275 },
    //         { name: event.target.value, age: 295 },
    //         { name: 'niishant', age: 2586525 },
    //         { name: 'abrtfyhnj5drftyuindul', age: 225 },
    //         ]
    //       }
    //     )
    //   }
      togglePersonsHandler = () =>  {
        console.log('Was clicked ');
          const doesShow = this.state.showPersons;
          this.setState({showPersons: !doesShow});
      }

      deletePersonHandler = (personIndex) => {
          // const persons = this.state.persons;
          const persons = [...this.state.persons];
          persons.splice(personIndex, 1);
          this.setState ({persons : persons })
      }

  render() {
    let persons = null;

    if (this.state.showPersons ) {
      persons = (
        <div>
              <br />
              {this.state.persons.map((person, index) => {
                return <div className="box">
                          <Person
                          click={() => this.deletePersonHandler(index)}
                          name={person.name}
                          age={person.age}
                          key={person.id} />
                        </div>
              })}
          </div>
      );
    }

    return (
      <div>
          Hello we are working on props
          <button 
          onClick={this.togglePersonsHandler}>Button</button>
          {persons}
      </div>
    );
  }
}

export default App;
