import React from 'react';
import logo from './logo.svg';
import bandPhoto from './band.jpg'
import './App.css';

let styles = {
  color:'red',
  fontFamily: 'Verdana'
}

function hello()
{
  return (
    <div>
        <p>Hello!</p>
        <p>How are you?</p>
    </div>
  )
}

function App() {
  
  let message = <h1>We come in peace</h1>;
  let blog = (<div><p>Line1</p><p>line 2</p></div>)
  let x = 100;
  if (x>10) {
    styles.color='green'
  }
  let picture = require('./pikachu.png')
  return (
  <div>
    {hello()}
    <p className='title'>Hello</p>
    <img src={ require('./pikachu.png') }/>
    <img src={ require('./images/dog.jpg')}/>
    <img src={picture}/>
    <img src={bandPhoto}/>
    <p style={styles}>We bring cookies</p>
    <p style={{ color:'orange', fontSize:'45px'}}>Orange</p>
    {message}
    { x }
    {2+2}
  </div>
   
  );
}

export default App;
