import React, { Component } from 'react';
import { render } from 'react-dom';
import styles from '../styles.css';

class HomeButton extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <button onClick={ ()=> {
              console.log('homeButton clicked');
              this.props.function();
              } }>Home</button>
      </div>
    );
  }

}

export default HomeButton;