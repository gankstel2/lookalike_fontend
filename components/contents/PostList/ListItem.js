import React, { Component } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import { DelPost, SelectDataUser } from "../../../redux/actions/PostCommentAction";
import ModalPost from "../../ModalPost";
import { connect } from "react-redux";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state={
      showdialog: false
    }
  }

  // onHandleClickToEdit = () => {
  //   <ModalPost isopen={this.props.modal}  toggle={this.toggle} />
  //   const { id } = this.props.list_massage;
  //   // const { EditPost } = this.props;
  //   // EditPost(id);
  // };
  onHandleDialog = () =>{ 
    const { list_massage:{id},  DataALL  } = this.props;
    const res = DataALL.filter(t => t.id == id);
    this.setState((prev)=>({showdialog: !prev.showdialog}))
    
  }
  onHandleClickToDel = () => {
    const { id } = this.props.list_massage;
    const { DelPost } = this.props;
    DelPost(id);
  };
  render() {
    const { id, data_field, id_users } = this.props.list_massage;
    return (
      <div>
        <ModalPost showdialog={this.state.showdialog} onHandleDialog={this.onHandleDialog} DataSelect={this.props.list_massage}  />
        <Card className="blockpost">
          <div style={{ textAlign: "right" }}>
            <a name={id} onClick={() => this.onHandleDialog()}>
              <FaRegEdit />
            </a>
            <a name={id} onClick={() => this.onHandleClickToDel()}>
              <FaRegTrashAlt />
            </a>
          </div>
          <CardBody>
            <CardTitle>{id_users}</CardTitle>
            <CardText>
              <span>{data_field}</span>
              <span>{}</span>
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //const { id } = this.props.list_massage;
  return {
    DataALL: state.PostCommentReducer.postAll
  };
};

export default connect(
  mapStateToProps,
  { DelPost, SelectDataUser }
)(ListItem);
