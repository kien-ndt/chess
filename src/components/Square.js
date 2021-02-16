import React from 'react';
import './components.css'
export default class Square extends React.Component{
    render(){
        return (
        <button
            className={"square " + this.props.shade}
            onClick={this.props.onClick}
            style={this.props.style}
        >
        </button>
        );  
    }
}
