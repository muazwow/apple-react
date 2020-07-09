import React, { Component } from "react";
import "./Second.css";
import Mainprops from "../Mainprops/Mainprops";
class Second extends Component {
  render() {
    return (
      <section className='second-hightlight-wrapper'>
        <div className='container'>
          <Mainprops
            newalert='New'
            title='MacBook Air'
            description='Twice the speed. Twice the storage. '
            price='From $999.'
            titleColor='black'
            desColor='black'
          />
        </div>
      </section>
    );
  }
}

export default Second;
