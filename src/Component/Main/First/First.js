import React, { Component } from "react";
import "./First.css";
import Mainprops from "../Mainprops/Mainprops";

class First extends Component {
  render() {
    return (
      <section className='first-hightlight-wrapper'>
        <div className='container'>
          <Mainprops newalert='New' title='iPad Pro' titleColor='black' />

          <div className='ipod-caption row'>
            <div className='col-sm-12 col-md-6 text-md-right'>
              iPad Pro available starting 3.25
            </div>
            <div className='col-sm-12 col-md-6 text-md-left'>
              Magic Keyboard coming in May
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default First;
