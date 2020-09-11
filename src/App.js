import React, { Component, useState } from "react";
import "./App.css";
import Person from "./Person/Person";

//funciton component

function App() {
  //IN funciton base component there can be two or more use State
  //1st use state
  //usestate always return two object first is the stat and 2nd one is to update the state
  const [personState, setPersons] = useState({
    person: [
      { name: "Nabin", age: "21" },
      { name: "saabin", age: "22" },
      { name: "dabin", age: "23" },
    ],
  });

  //another useState
  const [anotherState, setanotherState] = useState({ otherState: "someValue" });
  console.log(personState, anotherState);

  const changename = () => {
    //setPersons to chage the personState
    setPersons({
      person: [
        { name: "local bhanndari", age: "21" },
        { name: "sabin", age: "22" },
        { name: "dabin", age: "203" },
      ],
      //hence while changing state the object isn't merge so we have manually put otherState here if not thrn we use another useState as above
      // otherState: personState.otherState,
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        Hello my name is nabin this is class Component
      </header>
      <button onClick={changename}>Click me</button>
      <Person
        name={personState.person[0].name}
        age={personState.person[0].age}
      />
      <Person
        name={personState.person[1].name}
        age={personState.person[1].age}
      />
      <Person name={personState.person[2].name} age={personState.person[2].age}>
        Hobiies : Coding
      </Person>
    </div>
  );
}




//Class component
// class App extends Component {
// //state is reserved keyword in js which is used to manupulate states
//   state = {
//     person: [
//       { name: "Nabin", age: "21" },
//       { name: "sabin", age: "22" },
//       { name: "dabin", age: "23" },
//     ],
//   };

//   changename = ()=>{
////this .setState is used to chage the state value its only change the changed value but keeps unchnage merged
//     this.setState({
//       person: [
//         { name: "local bhanndari", age: "21" },
//         { name: "sabin", age: "22" },
//         { name: "dabin", age: "203" },
//       ],
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           Hello my name is nabin this is class Component
//         </header>
//         <button onClick={this.changename}>Click me</button>
//         <Person name={this.state.person[0].name} age={this.state.person[0].age} />
//         <Person name={this.state.person[1].name} age={this.state.person[1].age} />
//         <Person name={this.state.person[2].name} age={this.state.person[2].age}>Hobiies : Coding</Person>
//       </div>
//     );
//   }
// }

export default App;
