import React, { Component } from "react";
import "./Third.css";
import Mainprops from "../Mainprops/Mainprops";

class Third extends Component {
  render() {
    return (
      <section className='third-hightlight-wrapper'>
        <div className='container'>
          <Mainprops
            title='iPhone 11 Pro'
            description='Pro cameras. Pro display. Pro performance.'
            price='From $24.95/mo. or $599 with trade‑in.'
            titlecolor='white'
            desColor='white'
          />
        </div>
      </section>
    );
  }
}

export default Third;
