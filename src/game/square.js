import React from 'react';

class Square extends React.Component {

  //React Components can have state by setting 'this.state' in the constructor,
  //which should be considered private to the component.
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;