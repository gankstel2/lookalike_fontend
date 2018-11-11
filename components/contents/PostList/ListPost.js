import React, { Component } from "react";

import ListItem from "./ListItem";

class ListPost extends Component {
  render() {
    console.log(this.props.massage);
    const { massage } = this.props
    var listp =
    massage && massage.map((
        postlist //this.props.massage รับค่ามา
      ) => (
        <ListItem key={postlist.id} list_massage={postlist} /> //postlist <= วนมาจาก map
      ));
    return (
      <div style={{ border: "1px solid green" }} className="mt-3">
        {listp}
      </div>
    );
  }
}

export default ListPost;
