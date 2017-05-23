import React from 'react';

class Square extends React.Component {

  //React Components can have state by setting 'this.state' in the constructor,
  //which should be considered private to the component.
  constructor(){
      //In JS Classes, you need to explicitly call super(); when defining
      //the constructor of a subclass.
      super(); 
      this.state = {
          value: null
      };
  }

  render() {
    return (
      <button className="square" onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
      </button>
    );
  }
}

export default Square;