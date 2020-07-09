import React, { Component } from "react";
import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";
import Footer from "./Component/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
export default App;
