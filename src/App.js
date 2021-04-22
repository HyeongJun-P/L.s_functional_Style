import React, { useState, useEffect } from "react";
import "./App.css";
// import FuncComp from './components/FuncComp';
// import ClassComp from './components/ClassComp';

function App() {
  const [funcShow, setFuncShow] = useState(true);
  const [classShow, setClassShow] = useState(true);

  return (
    <div className="container">
      <h1>Hello Woirld</h1>
      <input type="button" value="onmove func" onClick= {() => {
        setFuncShow(true);
      }}></input>
      <input type="button" value="remove func" onClick= {() => {
        setFuncShow(false);
      }}></input><br></br>
      <input type="button" value="onmove class" onClick= {() => {
        setClassShow(true);
      }}></input>
      <input type="button" value="remove class" onClick= {() => {
        setClassShow(false);
      }}></input>
      { funcShow ? <FuncComp initNumber={2}/> : null}
      { classShow ? <ClassComp initNumber={2} /> : null}
    </div>
  );
}

const funcStyle = 'color:blue';
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

  useEffect(() => {
    console.log('%cfunc => useEffect (componentDidMount) ' + (++funcId), funcStyle)
    return function cleanup() {
      console.log('%cfunc => useEffect return  (componentWillUnMount) ' + (++funcId), funcStyle)
    }
  },[]);

  useEffect(() => {
    console.log('%cfunc => useEffect number (componentDidMount & componentDidUpdate) ' + (++funcId), funcStyle)    
    document.title = number;
    return function cleanup() {
      console.log('%cfunc => useEffect return number (componentDidMount & componentDidUpdate) ' + (++funcId), funcStyle)
    }
  }, [number]);

  useEffect(() => {
    console.log('%cfunc => useEffect date (componentDidMount & componentDidUpdate) ' + (++funcId), funcStyle)    
    document.title = date;
    return function cleanup() {
      console.log('%cfunc => useEffect return date (componentDidMount & componentDidUpdate) ' + (++funcId), funcStyle)
    }
  }, [date]); 

  console.log('%cfunc => render ' + (++funcId), funcStyle)

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
  componentWillUnmount() {
    console.log("%cclass => componentWillUnMount",classStyle);      
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
