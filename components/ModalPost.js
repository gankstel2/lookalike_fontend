import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { connect } from "react-redux";

class ModalPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
        btnLock: false,
        data: ""
    };

  }

  componentWillReceiveProps(props){
    console.log('props DataSelect',props.DataSelect)
    this.setState({data:props.DataSelect.data_field})
  }
  onHandleTextarea =(evt)=>{
    const value = evt.target.value;

    this.setState({
      data: value,
      btnLock: value.length > 0 ? false : true
    });
  }
  onSaveData = async()=>{
    const { data } = this.state;
    const { id } = this.props.DataSelect;
    try {
      const API_URL = "http://localhost:4002";

      const raw = await fetch(`${API_URL}/Post/updateData`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `data_field=${data}&id=${id}`
      });

      let res = await raw.json();
      const { LoadPost } = this.props;
      this.props.onHandleDialog();
      LoadPost();
      this.setState({ data: "" });
      
    
    } catch (error) {
      console.log("2error :", error);
    }
  };


  render() {
    const { showdialog, onHandleDialog, DataSelect } = this.props;
    console.log(DataSelect);
    return (
      <div>
        <Modal isOpen={showdialog} toggle={() => onHandleDialog()}>
          <ModalHeader toggle={this.toggle}>Edit:{DataSelect.id}</ModalHeader>
          <ModalBody>
            <textarea
              style={{ width: "100%", height: "100px" }}
              value={this.state.data}
              onChange={e => this.onHandleTextarea(e)}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>this.onSaveData()}>
              Save
            </Button>{" "}
            <Button color="secondary" onClick={()=>{}}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default connect()(ModalPost);
