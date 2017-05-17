import React, { Component } from 'react';
import './App.css';
import ColorCode from './ColorCode';
import Color from './Color';
import Slider from 'react-rangeslider';
// import 'react-rangeslider/lib/index.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      code : '#000000',
      value1 : 1,
      value2 : 1,
      value3 : 1,
    };
  }

  render() {
    return (
      <div className='root'>
        <div className="palette">
          <Color code={this.state.code}/>
          <ColorCode code={this.state.code} onEdit={this.onEdit.bind()}/>
        </div>
        <Slider
          min={0}
          max={255}
          value={this.state.value1}
          orientation='horizontal'
          onChange={this.handleChange1}
          />
        <Slider
          min={0}
          max={255}
          value={this.state.value2}
          orientation='horizontal'
          onChange={this.handleChange2}
          />
          <Slider
            min={0}
            max={255}
            value={this.state.value3}
            orientation='horizontal'
            onChange={this.handleChange3}
            />
      </div>
    );
  }

  handleChange1 = (value) => {
    var returndigit = parseInt(value, 10).toString(16);
      if(returndigit.length<2){
        returndigit = '0'+returndigit;
      }
    var colorcode = this.state.code;
    colorcode = colorcode.slice(0,5)+returndigit;
    this.setState({
      value1 : value,
      code : colorcode,
    });
  }

  handleChange2 = (value) => {
    var returndigit = parseInt(value, 10).toString(16);
      if(returndigit.length<2){
        returndigit = '0'+returndigit;
      }
    var colorcode = this.state.code;
    colorcode = colorcode.slice(0,3)+returndigit+colorcode.slice(5);
    this.setState({
      value2 : value,
      code : colorcode,
    });
  }

  handleChange3 = (value) => {
    var returndigit = parseInt(value, 10).toString(16);
      if(returndigit.length<2){
        returndigit = '0'+returndigit;
      }
    var colorcode = this.state.code;
    colorcode = '#'+returndigit+colorcode.slice(3);
    this.setState({
      value3 : value,
      code : colorcode,
    });
  }


  onEdit = (code) => {

    const value1 = parseInt(code.slice(1,3),16);
    const value2 = parseInt(code.slice(3,5),16);
    const value3 = parseInt(code.slice(5,7),16);

    this.setState({
      value1 : value1,
      value2 : value2,
      value3 : value3,
      code : code,
    });
  }
}

export default App;
