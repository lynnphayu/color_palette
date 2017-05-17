import React,{Component} from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

class ColorSlider extends Component{

  constructor(props){
    super(props);
    this.state = {
      value : 8,
    }
  }


    render() {
      return (
        <Slider
              min={0}
              max={255}
              value={this.state.value}
              orientation='horizontal'
              onChange={this.handleChange}
            />
      );
    }

    handleChange = ( value ) => {
      this.setState({
        value : value,
      });
    }

}

export default ColorSlider;
