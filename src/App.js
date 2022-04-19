import React from 'react';
import './App.css';

import KeyboardButton from './Components/KeyboardButton';

import Header from './Components/Header';

import Tile from './Components/Tile';

// const styles = WordleButtonTheme => ({
//   buttonPadding: {    
//     padding: '30px',   
//   },
// });

function App() {
  return (
    <div className='OVERARCHING'>
      <Header/>
      
      
      
      <div className='Container'>

        <div className='TileGrid'>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
        </div>


        <div className='Keyboard'>
          <div className='FirstRow'>
            <KeyboardButton Letter="Q"></KeyboardButton>
            <KeyboardButton Letter="W"></KeyboardButton>
            <KeyboardButton Letter="E"></KeyboardButton>
            <KeyboardButton Letter="R"></KeyboardButton>
            <KeyboardButton Letter="T"></KeyboardButton>
            <KeyboardButton Letter="Y"></KeyboardButton>
            <KeyboardButton Letter="U"></KeyboardButton>
            <KeyboardButton Letter="I"></KeyboardButton>
            <KeyboardButton Letter="O"></KeyboardButton>
            <KeyboardButton Letter="P"></KeyboardButton>
          </div>

          <div className='SecondRow'>
            <KeyboardButton Letter="A"></KeyboardButton>
            <KeyboardButton Letter="S"></KeyboardButton>
            <KeyboardButton Letter="D"></KeyboardButton>
            <KeyboardButton Letter="F"></KeyboardButton>
            <KeyboardButton Letter="G"></KeyboardButton>
            <KeyboardButton Letter="H"></KeyboardButton>
            <KeyboardButton Letter="J"></KeyboardButton>
            <KeyboardButton Letter="K"></KeyboardButton>
            <KeyboardButton Letter="L"></KeyboardButton>
          </div>

          <div className='ThirdRow'>
            <KeyboardButton Letter="ENTER"></KeyboardButton>
            <KeyboardButton Letter="Z"></KeyboardButton>
            <KeyboardButton Letter="X"></KeyboardButton>
            <KeyboardButton Letter="C"></KeyboardButton>
            <KeyboardButton Letter="V"></KeyboardButton>
            <KeyboardButton Letter="B"></KeyboardButton>
            <KeyboardButton Letter="N"></KeyboardButton>
            <KeyboardButton Letter="M"></KeyboardButton>
            <KeyboardButton Letter="BACKSPACE"></KeyboardButton>
          </div>
        </div>


      </div>
    
    
    
    
    
    </div> // OVERARCHING DIV
  );
}

export default App;
