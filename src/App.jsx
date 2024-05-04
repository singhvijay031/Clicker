import React from "react";
import Cookies from "./assets/cookies.jpeg";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleclick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter} </h1>
        <div className="CookieWrapper">
          <img onClick={this.handleclick} src={Cookies} />
        </div>
        {/* <button onClick={this.handleclick}>Click Garrnus!</button> */}
      </div>
    );
  }
}
export default App;
