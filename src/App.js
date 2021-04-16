import React from 'react';
import './App.css'
// import FuncComp from './components/FuncComp';
// import ClassComp from './components/ClassComp';

function App() {
  return (
    <div className="container">
      Hello Woirld
      <FuncComp initNumber = {2}/>
      <ClassComp  initNumber = {2}/>
    </div>
  );
}

function FuncComp(props) {
  return (
    <div className="container">
      <h2> function style component</h2>
      <p>Number : {props.initNumber}</p>
    </div>
  );
}

class ClassComp extends React.Component {
  state = {
    number : this.props.initNumber
  }
  render() {
    return (
      <div className="container">
        <h2> class style component</h2>
        <p>Number : {this.state.number}</p>
        <input type="button" value="random" 
        onClick={function() {
          this.setState({
            number: Math.floor(Math.random() * 99)
          })
        }.bind(this)}></input>
      </div>
    );
  }
}

export default App;
