import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "react-bootstrap";
import "./App.css";
import React from "react";
import User from "./user";
class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  render() {
    console.warn("check re-rendering");
    return (
      <div className="App">
        <User  count={this.state.count}  />
        <button onClick={() => this.setState({ count: this.state.count  })}>
          Update
        </button>
      </div>
    );
  }
}

export default App;
