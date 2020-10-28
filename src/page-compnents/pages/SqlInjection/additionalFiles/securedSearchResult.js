import React from "react";

export default function SecuredSearchResult({
  finalInputValue,
  headData,
  jsonData,
}) {
  return (
    <React.Fragment>
      <div className="search-result-text">
        {finalInputValue.length > 500
          ? "Length of the string is very Big cannot display it"
          : 'Search Results For : "' + finalInputValue + '"'}
      </div>
      <div className="display-table">
        <table className="product-table">
          <thead>
            <tr>
              {headData.map((data) => {
                return (
                  <th key={data}>{data.split("_").join(" ").toUpperCase()}</th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {jsonData.map((rowData) => {
              return (
                <tr key={rowData[headData[1]]}>
                  {headData.map((headName) => {
                    return <td key={rowData[headName]}>{rowData[headName]}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
