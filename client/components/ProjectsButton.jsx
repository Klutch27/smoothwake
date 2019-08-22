import React, { Component } from 'react';
import { render } from 'react-dom';
import styles from '../styles.css';

class ProjectsButton extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <button>Projects</button>
      </div>
    );
  }

}

export default ProjectsButton;