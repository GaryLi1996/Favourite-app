import React, { Component } from "react";
import "./border.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";
// import Links from './links'

import AddIcon from "@material-ui/icons/Add";

/*https://reach.tech/dialog/*/

/**
 * Creates the overlay and takes the input of the desire link
 */
class Add extends Component {
  state = {
    isShowing: false,
    inputText: "",
  };

  opened = () => this.setState({ isShowing: true });
  closed = () => {
    this.setState({ isShowing: false, inputText: "" });
  };

  handleChange = (event) => {
    this.setState({ inputText: event.target.value });
  };
  render() {
    return (
      <div className="center">
        <button className="btn btn-outline-secondary" onClick={this.opened}>
          <AddIcon />
        </button>
        <DialogOverlay isOpen={this.state.isShowing}>
          <DialogContent
            aria-label="Link"
            className="center"
            style={{
              boxShadow: "0px 10px 50px hsla(0, 0%, 0%, 0.33)",
            }}
          >
            <label htmlFor="link">Link</label>
            <input
              type="text"
              name="link"
              value={this.state.inputText}
              onChange={this.handleChange}
            />
            <button
              onClick={() => {
                this.closed();
                this.props.linking(this.state.inputText);
              }}
            >
              Add
            </button>
          </DialogContent>
        </DialogOverlay>
      </div>
    );
  }
}

export default Add;
