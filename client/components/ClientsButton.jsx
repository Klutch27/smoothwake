import React, { Component } from 'react';
import { render } from 'react-dom';
import styles from '../styles.css';

class ClientsButton extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <button onClick={ ()=> {
              console.log('clients button clicked');
              this.props.function();
              } }>Clients</button>
      </div>
    );
  }
}

export default ClientsButton;