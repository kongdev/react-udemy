import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id : 1 , name: 'kong01', age: 18 },
      { id : 2 , name: 'kong02', age: 19 },
      { id : 3 , name: 'kong03', age: 20 },
    ],
    showPerson: false,

  }

  swNameHandler = (newName) => {

    this.setState({
      persons: [
        { name: newName, age: 18 },
        { name: 'kong020', age: 19 },
        { name: 'kong030', age: 20 },
      ]
    })

  }

  nameChangeHandler = (event ,id) => {
    const personIndex  = this.state.persons.findIndex(param =>{
      return param.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person


    this.setState({
      persons: persons
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson

    this.setState({
      showPerson: !doesShow,
    });
  }

  deletePersonHandler = (personIndex) =>{
    //const persons = this.state.persons
    const persons = [...this.state.persons]
    persons.splice(personIndex,1)
    this.setState({persons:persons});
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px soild blue',
      padding: '8px',
      cursor: 'pointer',
    }

    let person = null
    if (this.state.showPerson === true) {
      person = (
        <div>
          {this.state.persons.map((person, index)=>{
            return <Person  
              key={person.id}
              change={(event)=>this.nameChangeHandler(event ,person.id)}
              click={()=>this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}/>
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>hi , i am react app</h1>
        <button
          style={style}
          onClick={() => this.togglePersonHandler()}>Toggle Person</button>
          {person}

      </div>
    );
  }
}

export default App;
