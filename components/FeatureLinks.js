import React, { Component } from 'react'

export class FeatureLinks extends Component {
    render() {
        return (
            <li className="pt-2">
                <a href='#'>{this.props.link}</a>
            </li>
        )
    }
}

export default FeatureLinks
