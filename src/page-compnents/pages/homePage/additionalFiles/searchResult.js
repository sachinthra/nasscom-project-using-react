import React from "react";

export default function SearchResult({ finalInputValue }) {
  return (
    <React.Fragment>
      <div className="output">{finalInputValue}</div>
    </React.Fragment>
  );
}
