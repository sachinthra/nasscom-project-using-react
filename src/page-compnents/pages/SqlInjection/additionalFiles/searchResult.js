import React from "react";

export default function SearchResult({ finalInputValue }) {
  return (
    <React.Fragment>
      <div className="search-result-text">
        {finalInputValue.length > 500
          ? "Length of the string is very Big cannot display it"
          : 'Search Results For : "' + finalInputValue + '"'}
      </div>
      <div className="display-table">Table {finalInputValue}</div>
    </React.Fragment>
  );
}
