import React, { Component } from "react";
import Header from "./Layout/Header";
import InsPost from "./contents/PostList/InsPost";
import { Navbar, Input, Button } from "reactstrap";

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
            <div className="col-md-12">
            <InsPost />
            </div>
          
        </div>
      </div>
    );
  }
}

export default Layout;
