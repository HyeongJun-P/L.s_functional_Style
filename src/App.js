import React, { useState, useEffect } from "react";
import "./App.css";
// import FuncComp from './components/FuncComp';
// import ClassComp from './components/ClassComp';

function App() {
  return (
    <div className="container">
      Hello Woirld
      <FuncComp initNumber={2} />
      <ClassComp initNumber={2} />
    </div>
  );
}

let funcStyle = 'color:blue';
let funcId = 0;

function FuncComp(props) {

  // const numberState = useState(props.initNumber);
  // const number = numberState[0];
  // const setNumber = numberState[1];

  const [number, setNumber] = useState(props.initNumber);

  // const dateState = useState((new Date().toString()));
  // const date = dateState[0];
  // const setDate = dateState[1];

  const [date, setDate] = useState((new Date().toString()))

  // side effect
  useEffect(function() {
    console.log('%cfunc => useEffect (componentDidMount & componentDidUpdate' + (++funcId, funcStyle))    
    document.title = number + ' : ' + date;
  });

  console.log('%cfunc => render' + (++funcId, funcStyle))

  return (
    <div className="container">
      <h2> function style component</h2>
      <p>Number : {number}</p>
      <p>Date : {date}</p>
      <input
        type="button"
        value="random"
        onClick={function () {
          setNumber(Math.floor(Math.random() * 99))
        }}
      ></input>
      <input
        type="button"
        value="date"
        onClick={function () {
          setDate((new Date().toString()))
        }}
      ></input>
    </div>
  );
}

const classStyle = 'color:red';

class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date: (new Date().toString())
  };
  componentWillMount() {
    console.log('%cclass => componentWill<ount', classStyle);
  }
  componentDidMount() {
    console.log('%cclass => componentDidMount',classStyle);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('%cclass => shouldComponentUpdate',classStyle);
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('%cclass => componentWillUpdate',classStyle);
  }
  componentDidUpdate(nextProps, nextState) {
    console.log("%cclass => componentDidUpdate",classStyle);
  }

  // 커밋 수정됨

  render() {
    console.log('%cclass => render',classStyle);
    return (
      <div className="container">
        <h2> class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input
          type="button"
          value="random"
          onClick={function () {
            this.setState({
              number: Math.floor(Math.random() * 99),
            });
          }.bind(this)}
        ></input>
        <input
          type="button"
          value="date"
          onClick={function () {
            this.setState({
              date : (new Date().toString())
            });
          }.bind(this)}
        ></input>
      </div>
    );
  }
}

export default App;
