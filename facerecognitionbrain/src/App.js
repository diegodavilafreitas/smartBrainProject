import React, {Component} from 'react';
import Clarifai from 'clarifai';
import FaceRcognition from './components/FaceRcognition/FaceRcognition';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';


const app = new Clarifai.App({
  apiKey: 'b2bf543720e84600b4089f9db9056a45'
 });


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
      imageUrl:'',

    }
  }
  onImputChange = (event) => {
    this.setState({input:event.target.value});
  }

  onButtonSubmit = () =>{
    this.setState({imageUrl: this.state.input})

    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(
        function(response){
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
        },
        function(err){
          //do something with error
        }
    )

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
        onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRcognition imageUrl={this.state.imageUrl} />
      </div>
    );
    
  }
}

export default App;
