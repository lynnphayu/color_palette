import React,{Component} from 'react';
import './color_code.css';

class  ColorCode extends Component {


  constructor(props) {
    super(props);
    this.state = {
      editing : false,
    };
  }

  render(){
    if(this.state.editing)
      return this.renderEdit();
    return this.renderCode();
  }

  renderEdit = () => {
      return <input type='text'
        ref={ (e) => e ? e.selectionStart = this.props.code: null }
        autoFocus={true}
        defaultValue={this.props.code}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnterToken}
    />;
  }

  renderCode = () => {
    return <div className='code' onClick={this.onEdit}>{this.props.code}</div>
  }

  onEdit = () => {
    this.setState({
      editing : true,
    });
  }

  finishEdit = (e) => {
    this.props.onEdit(e.target.value);
    this.setState({
      editing : false,
    });
  }

  checkEnterToken = (e) => {
    if(e.key === 'Enter')
      this.finishEdit(e);
  }
}


export default ColorCode;
