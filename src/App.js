import React , {Component} from "react";
import "./App.css";
import Person from './Person/Person'

//funciton component


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//          Hello my name is  nabin
//       </header>
//       <Person />
//     </div>
//   );
// }



//Class component
class App extends Component{
  render() {
    return (
          <div className="App">
            <header className="App-header">
               Hello my name is  nabin this is class Component
            </header>
            <Person />
          </div>
        );
  }
}




export default App;
