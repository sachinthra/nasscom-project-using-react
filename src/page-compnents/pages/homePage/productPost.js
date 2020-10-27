import React, { Component } from "react";
import axios from "axios";
import Auth from "../../Auth";

import InputForm from "./additionalFiles/inputForm";
import SearchResult from "./additionalFiles/searchResult";
import { ReactComponent as SyncAltSolid } from "./additionalFiles/icons/syncAltSolid.svg";
import "../comCss/boxWith3.css";
import "../comCss/productPost.css";

class ProductPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      inputMessage: "",
      finalInputMessage: "",
      allMessageData: "",
      // headData: "",
      headData: "",
      jsonData: [],
    };
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    // this.setState({ finalInputMessage: this.state.inputMessage });
    axios.defaults.baseURL = "http://584a801028de.ngrok.io/";
    axios
      .post("add/product", {
        prod_name: this.state.productName,
        prod_msg: this.state.inputMessage,
      })
      .then((res) => {
        console.log(res.data);
        console.log(this.state.inputMessage);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleInputChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleRefreshButton = (event) => {
    event.preventDefault();
    console.log("refresh");
    axios.defaults.baseURL = this.props.baseURL;
    axios
      .post("products", { data: this.state.inputValue })
      .then((res) => {
        console.log(res.data);
        if (res.data.status !== "success") {
          Auth.signout();
        } else {
          this.setState({ headData: res.data.meta });
          this.setState({ jsonData: res.data.data });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <React.Fragment>
        <img
          className="wave"
          src={require("../resourses/img-files/wave.png")}
          alt="nice"
          aria-hidden="true"
        />
        <h1 className="head">Home Page - Share Ur products</h1>
        <InputForm
          handleInputChange={this.handleInputChange}
          handleOnSubmit={this.handleOnSubmit}
        />
        <div className="product-input-field-box">
          <div
            type="submit"
            className="product-btn"
            onClick={this.handleOnSubmit}
          >
            Send
          </div>

          <div className="refresh-button" onClick={this.handleRefreshButton}>
            <SyncAltSolid />
          </div>
        </div>

        {this.state.headData !== "" && (
          <SearchResult
            headData={this.state.headData}
            jsonData={this.state.jsonData}
          />
        )}
      </React.Fragment>
    );
  }
}

export default ProductPost;
