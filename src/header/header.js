import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="container">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Author: {this.props.name}</p>
            </div>
        )
    }
}

export default Header;