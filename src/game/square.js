import React from 'react';

//This is a functional component. Whenever a component only has the render method
//it is best to convert it to a functional component.
function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
}

export default Square;