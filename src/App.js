import React, { Component } from "react";
import "./App.css";
import AddLink from "./components/addLinkings";
import BorderBox from "./components/borderBox";

class App extends Component {
  // For local storage 
  userData;

  state = {
    link: [],
  };

  /**
   * Whenever a component changes it will save to local storage
   */
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("user"));

    if (localStorage.getItem("user")) {
      this.setState({
        link: this.userData.link,
      });
    } else {
      this.setState({
        link: [],
      });
    }
    console.log("saved", this.link);
  }

  /**
   * At the beginning when the components are about to load
   * it will get the data from the local storage and display it
   * @param {*} nextProps
   * @param {*} nextState
   */
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("user", JSON.stringify(nextState));
    console.log("saving");
  }

  /**
   * Delete the element of the array
   * @param {Link} e
   */
  handleDelete = (e) => {
    console.log("Called delete", e);
    var array = [...this.state.link];
    console.log("array index", e.target, array);
    var index = array.indexOf(e);

    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ link: array });
    }
  };

  /**
   * Takes the input element and adds it into the array
   * @param {user input} inputLink
   */
  addLink = (inputLink) => {
    this.setState({ link: this.state.link.concat(inputLink) });
  };

  /**
   * Takes the first character of the string and
   * return it as a captial letter
   * @param {String} str
   */
  Capitalize(str) {
    return str.charAt(0).toUpperCase();
  }

  render() {
    console.log("state", this.state.link);
    return (
      <div className="box">
        {this.state.link.map((link, index) => (
          <div className="links" key={index}>
            <BorderBox handleDelete={this.handleDelete} link={link}>
              <a className="letter" href={link}>
                {this.Capitalize(link)}
              </a>
            </BorderBox>
          </div>
        ))}
        <AddLink linking={this.addLink} />
      </div>
    );
  }
}

export default App;
