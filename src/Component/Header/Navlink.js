import React, { Component } from 'react'

export class Navlink extends Component {
    render() {
        return (
           
        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">{this.props.name}{this.props.image}</a></li>
           
        )
    }
}

export default Navlink
