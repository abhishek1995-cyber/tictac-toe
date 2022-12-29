import React from 'react';
import Board from './Board';
import Game from './Game';
import Square from './square';


class App extends React.Component{
  constructor(props){
    super(props)
    this.setState = {

    }
  }

  render(){
    return (
      <>
     
      <Game/>
      </>
    )
  }
}

export default App