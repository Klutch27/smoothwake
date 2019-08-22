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
        <button>Clients</button>
      </div>
    );
  }
}

export default ClientsButton;