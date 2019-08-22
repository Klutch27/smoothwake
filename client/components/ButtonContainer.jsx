import React, { Component } from 'react';
import { render } from 'react-dom';
import styles from '../styles.css';
import ProjectsButton from './ProjectsButton.jsx';
import ClientsButton from './ClientsButton.jsx';
import HomeButton from './HomeButton.jsx';

class ButtonContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      displayClientButtons: false,
      displayProjectsButtons: false,
      createProject: false,
    };
    this.displayClientButtons = this.displayClientButtons.bind(this);
    this.displayProjectsButtons = this.displayProjectsButtons.bind(this);
    this.homeButton = this.homeButton.bind(this);
    this.createProject = this.createProject.bind(this);
  }

  displayClientButtons(){
    console.log('client button clicked');
    return this.setState({
      displayClientButtons: true,
      displayProjectsButtons: false,
      createProject: false,
    });
  }

  displayProjectsButtons(){
    console.log('projects button clicked');
    return this.setState({
      displayClientButtons: false,
      displayProjectsButtons: true,
      createProject: false,
    });
  }

  homeButton(){
    console.log('home button clicked');
    return this.setState({
      displayClientButtons: false,
      displayProjectsButtons: false,
      createProject: false,
    });
  }

  createProject(){
    return this.setState({
      displayClientButtons: false,
      displayProjectsButtons: false,
      createProject: true,
    });
  }

  // write logic 

  render(){
    console.log(this.state);
    // write conditional logic: if state = true, display X. else, display Y
    // on clientsButton click, set displayProjectsButtons to false, and displayClientButtons to true
    // check state, and if true, render those components

    if (this.state.displayClientButtons === false && this.state.displayProjectsButtons === false){
      return (
          <div className={'buttonsContainer'}>
            <ProjectsButton function={this.displayProjectsButtons} />
            <ClientsButton function={this.displayClientButtons}/>
          </div>
      );
    }

    else if (this.state.displayClientButtons === true){
      // render the buttons associated with client buttons
      return (
        <div className={'buttonsContainer'}>
          {/* display client buttons */}
          <button>Find One</button>
          <button>Find All</button>
          <HomeButton function={this.homeButton} />
        </div>
      );
    }

    else if (this.state.displayProjectsButtons === true) {
      return (
        <div className={'buttonsContainer'}>
          {/* display projects buttons */}
          <button onClick={()=>{this.createProject();}}>Create New Project</button>
          <button>Find A Project</button>
          <button>Update A Project</button>
          <button>Delete A Project</button>
          <HomeButton function={this.homeButton} />
        </div>
      );
    }

    else if (this.state.createProject === true){
      return(
        <div>
          <form>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
          </form>
        </div>
      );
    }

  }



}

export default ButtonContainer;