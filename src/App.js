import React from 'react';
import './App.css';

import KeyboardButton from './Components/KeyboardButton';

import Header from './Components/Header';

import Tile from './Components/Tile';

import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';

import { grey } from '@material-ui/core/colors';
import { yellow } from '@material-ui/core/colors';
import { green } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';

const ButtonThemes = createTheme({
  palette: {
    primary: grey,
    warning: yellow,
    success: green,
    error: red,
    neutral: {
      main: '#e0e0e0',
      contrastText: '#fff',
    },
  }
});

const Neutral = createTheme( { palette: { primary: grey } } );
const Wrong = createTheme( { palette: { primary: red } } );
const Correct = createTheme( { palette: { primary: green } } );
const WrongPos = createTheme( { palette: { primary: yellow } } );

function App() {
  return (
    <div className='OVERARCHING'>
      <Header/>
      
      
      
      <div className='Container'>

        <div className='TileGrid'>
          <Tile Data="True"></Tile>
          <Tile Data="Incorrect"></Tile>
          <Tile Data="Correct"></Tile>
          <Tile Data="WrongPos"></Tile>
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
<ThemeProvider theme={ ButtonThemes }>
          <div className='FirstRow'>
            <KeyboardButton Letter="Q" Theme={ Correct }></KeyboardButton>
            <KeyboardButton Letter="W" Theme={ WrongPos }></KeyboardButton>
            <KeyboardButton Letter="E" Theme={ Wrong }></KeyboardButton>
            <KeyboardButton Letter="R" Theme={ Neutral }></KeyboardButton>
            <KeyboardButton Letter="T" Theme={ Wrong }></KeyboardButton>
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
</ThemeProvider>
        </div>


      </div>
    
    
    
    
    
    </div> // OVERARCHING DIV
  );
}

export default App;
