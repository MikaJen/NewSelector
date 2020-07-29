import React, {Component} from 'react'
import Shape from './Shape'

// Not sure if the below 3 lines belong here
const Shape = (props) => {
  const Shape= props.shape
  const selectShape= props.selectShape
  return(
    <div className={shape} onClick={() => selectShape(shape)}/>
  )
}
// check that lines 5-9 are in the right place

class Selector extends Component {
  constructor() {
    super();
    this.state = {
      selectedShape: (shapeName) => {
        this.setState({
          selectedShape: shapeName
        })

      }
    };
  };

  render () {
    return (
      <div className= "container">
        <div className= "navbar">
          <div>Selected:  </div>
          <div>{this.state.selectedShape}</div>
          
          <div className= "shape-list">
            <Shape shape="square" selectShape={this.selectShape}/> //adding instances of Shape Component
            <Shape shape="circle" selectShape={this.selectShape}/> // s/a/a
            <Shape shape="triangle" selectShape={this.selectShape}/> // s/a/a
          </div>
        </div>
      </div>
    )
  }
}

export default Selector;