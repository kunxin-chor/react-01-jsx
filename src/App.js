import React from 'react';
import logo from './logo.svg';
import './App.css';

let styles = {
  color:'red',
  fontFamily: 'Verdana'
}

function App() {
  
  let message = <h1>We come in peace</h1>;
  let blog = (<div><p>Line1</p><p>line 2</p></div>)
  let x = 100;
  if (x>10) {
    styles.color='green'
  }
  return (
  <div>
    <p className='title'>Hello</p>
    <p style={styles}>We bring cookies</p>
    <p style={{ color:'orange', fontSize:'45px'}}>Orange</p>
    {message}
    { x }
    {2+2}
  </div>
   
  );
}

export default App;
