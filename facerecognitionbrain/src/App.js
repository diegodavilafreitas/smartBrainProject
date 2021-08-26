import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
  
    particles: {
        number: {
          value: 150,
          density: {
            enable: true,
            value_area: 600
          }
        }
    }
}


class App extends Component{
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }
  onImputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () =>{
    console.log('click');
  }

  render(){
    return(
      <div className="App">
        <Particles className="particles"
                params={particlesOptions} />
        <Navigation/>
        <Logo />
        <Rank/>
        <ImageLinkForm
        onImputChange={this.onImputChange}
        onButtonSubmit={this.onButtonSubmit} />
        {/*
        <FaceRcognition />*/}
      </div>
    );
    
  }
}

export default App;
