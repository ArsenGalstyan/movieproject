import React, { Component } from 'react'

export default class Movies extends Component {
    render() {
        return (
            <div>
                <img src={this.props.img}/>
                <p>{this.props.name}</p>
            </div>
        )
    }
}
