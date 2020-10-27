import React from "react";

export default function DashBoard({ baseURL }) {
  // {} props

  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>DashBoard - {baseURL}</h1>
    </React.Fragment>
  );
}
