import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { connect } from "react-redux";
import { LoadPost } from "../../../redux/actions/PostCommentAction";
import ListPost from "./ListPost";

class InsPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      btnLock: true
    };
  }
  onHandleTextarea = evt => {
    const value = evt.target.value;

    this.setState({
      data: value,
      btnLock: value.length > 0 ? false : true
    });
  };
  onTweet = async () => {
    const { data } = this.state;

    try {
      const API_URL = "http://localhost:4002";

      const raw = await fetch(`${API_URL}/Post/PostData`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `data_field=${data}`
      });

      let res = await raw.json();
      const { LoadPost } = this.props;
      LoadPost();
      this.setState({ data: "" });
      // dispatch({
      //   type:'LoadPost',
      //   payload: res
      // })

      // console.log('res',res)
      //   if (res.status) {
      //     dispatch({
      //       type: actionType.PRODUCT_LOAD_ALL,
      //       payload: res.products
      //     });
      //   } else {
      //     console.log("1error", res.message);
      //   }
    } catch (error) {
      console.log("2error :", error);
    }
  };
  componentDidMount() {
    console.log("componentDidMount");
    const { LoadPost } = this.props;
    LoadPost();
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    // console.log(this.props.allState)
    const { PostDataAll } = this.props;
    // console.log("send success",PostDataAll);
    // console.log(PostDataAll.length);
    let datalist = <h2>ไม่มีข้อมูล</h2>;

    if (PostDataAll && PostDataAll.length > 0) {
      datalist = <ListPost massage={PostDataAll} />;
    }
    return (
      <div
        style={{ border: "1px solid red" }}
        className="d-flex justify-content-center"
      >
        <div
          style={{ border: "1px solid red", width: "290px" }}
          className="mr-2"
        >
          <Card>
            <CardImg
              top
              width="100%"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
        </div>
        <div style={{ border: "1px solid red", width: "590px" }}>
          <div>
            <Card style={{ background: "#71c9f8" }}>
              <CardBody>
                <CardSubtitle>
                  <textarea
                    placeholder="What happening?"
                    style={{ width: "100%", height: "100px" }}
                    value={this.state.data}
                    onChange={e => this.onHandleTextarea(e)}
                  />
                </CardSubtitle>
                <div style={{ textAlign: "right" }}>
                  <Button
                    type="button"
                    disabled={this.state.btnLock}
                    className="btn btn-primary"
                    onClick={() => this.onTweet()}
                    style={{ marginTop: "2px" }}
                  >
                    Tweet
                  </Button>
                </div>
              </CardBody>
            </Card>
            {datalist}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    PostDataAll: state.PostCommentReducer.postAll
  };
};

export default connect(
  mapStateToProps,
  { LoadPost }
)(InsPost);
