import React, { Component } from "react";
import axios from "axios";

import InputForm from "./additionalFiles/inputForm";
import SearchResult from "./additionalFiles/searchResult";
import "../comCss/boxWith3.css";
import "../comCss/productPost.css";

class ProductPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputMessage: "",
      finalInputMessage: "",
      allMessageData: "",
      headData: "",
      jsonData: [],
    };
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    // this.setState({ finalInputMessage: this.state.inputMessage });
    axios.defaults.baseURL = "http://584a801028de.ngrok.io/";
    axios
      .post("products", { prod_name: this.state.inputMessage })
      .then((res) => {
        console.log(res.data);

        this.setState({ headData: res.data.meta });
        this.setState({ jsonData: res.data.data });
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
        <div className="search-result-text">hi</div>
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
