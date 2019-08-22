import React, { Component } from 'react';
import { render } from 'react-dom';
import styles from '../styles.css';
import ButtonContainer from './ButtonContainer.jsx';

class App extends Component {

  constructor(props){
    super(props);
  }
 

  render() {
    return (
      <div className={'containerDiv'}>
        <div className={'mainDiv'}>
          <h1>smoothWave</h1>
        </div>
        <div>
          <ButtonContainer className={'buttonContainer'}/>
        </div>
      </div>
    );
  }
}

export default App;