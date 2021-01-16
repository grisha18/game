import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState} from 'react';



// сделать, чтобы внутри квадрата был или крестик или нолик
// при нажатии чтобы переключало
// прочитать https://habr.com/ru/post/429712/

const Square = ()=>{
const [color, setColor] = useState("red")

  return(
      <div style={{width: 100, height: 100, backgroundColor: color, display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={()=>{setColor(color=="green" ? "red" : "green")}}>
      </div>
  )
} 

class Game extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      count: 0,
      didWeWin: false
    }

  }

clickHandler = event => {
  const  data = event.target.getAttribute('data');
  const  currentSquares = this.state.squares;
  console.log(currentSquares);
  const wins = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ]
  let didWeWin = false;

  if(this.state.didWeWin)
    return;

  if(currentSquares[data] != null){
    return
  }

  currentSquares[data] = (this.state.count % 2 === 0) ? 'X' : 'O';

  wins.forEach(e =>{
    if( currentSquares[e[0]] && currentSquares[e[1]] && currentSquares[e[2]] ){
      if( (currentSquares[e[0]] === currentSquares[e[1]] ) && (currentSquares[e[1]] === currentSquares[e[2]]) ){
        console.log('pobeda')
        didWeWin = true;
      }

    }
    
  }) 
  

  this.setState( {count: this.state.count + 1 });
  this.setState({squares: currentSquares});
  this.setState({didWeWin: didWeWin});
    
  
}


render(){
  return(
    <div className="tic-tac-toe">
        <div className="ttt-grid" onClick={this.clickHandler} data="0">
        {this.state.squares[0]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="1">
        {this.state.squares[1]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="2">
        {this.state.squares[2]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="3">
        {this.state.squares[3]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="4">
        {this.state.squares[4]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="5">
        {this.state.squares[5]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="6">
        {this.state.squares[6]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="7">
        {this.state.squares[7]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="8">
        {this.state.squares[8]}</div>
    </div>


)
}


}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Square color="aqua" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default Game;
