import React, { Component } from 'react';
import { render } from 'react-dom';
import styles from '../styles.css';
import ProjectsButton from './ProjectsButton.jsx';
import ClientsButton from './ClientsButton.jsx';

class ButtonContainer extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div className={'buttonsContainer'}>
        <ProjectsButton />
        <ClientsButton />
      </div>
    );
  }



}

export default ButtonContainer;