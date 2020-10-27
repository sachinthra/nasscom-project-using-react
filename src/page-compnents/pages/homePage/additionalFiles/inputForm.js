import React from "react";

export default function InputForm({
  handleInputChange,
  handleOnSubmit,
  handleRefreshButton,
}) {
  return (
    <React.Fragment>
      <form className="product-input-field">
        {/* <div className="i">
          <i className="fas fa-arrow-alt-circle-right"></i>
        </div> */}
        <div className="product-input-field-box">
          <div className="product-input-field-name">Product name :</div>
          <input
            name="productName"
            type="text"
            className="input"
            onChange={handleInputChange}
          />
        </div>

        <div className="product-input-field-box">
          <div className="product-input-field-name">Product Message :</div>
          <input
            name="inputMessage"
            type="text"
            className="input"
            onChange={handleInputChange}
          />
        </div>
      </form>
    </React.Fragment>
  );
}
