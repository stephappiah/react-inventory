import React, { Component } from "react";

class ActionBar extends Component {
  render() {
    return (
      <ul class="nav p-2 border-gray">
        <li class="nav-item">
          <a class="btn btn-sm btn-dark">New</a>
        </li>
      </ul>
    );
  }
}

export default ActionBar;
