import React,{Component} from 'react';


class Color extends Component {

  constructor(props){
    super(props);
    this.state = {
      color_code : 'pink',
    }
  }

  render(){
    return (
      <div style={{
        display: 'block',
        height: '80%',
        backgroundColor : this.props.code,
      }}></div>
    );
  }

}


export default Color;
