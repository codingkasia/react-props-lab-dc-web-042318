// Code The Spaceship Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class Spaceship extends React.Component {
    render() {
        return (
            <div>
                <div>
                Spaceship Name: {this.props.name}</div>
                <div>
                Spaceship Speed: {this.props.speed}</div>
                <div>Has Rockets? {this.props.hasRockets ? "yes" : "no"}</div>
                <ul>
                Spaceship Colors {this.props.colors.map((color) => <li>{color}</li>)}
                </ul>
            </div>
        )
    }
}

Spaceship.defaultProps = {
    speed: "slow",
    hasRockets: false,
    colors: ['black', 'red']
}