import React, { Component } from "react";
//import StopWatch from "./component/stopwatch";
import Navbar from "./component/navigation";
import NavBar from "./component/navbar";
import All from "./component/all";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <NavBar />
        </nav>
        <main>
          <h1>React navigation</h1>
          <Navbar />
          <All />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
