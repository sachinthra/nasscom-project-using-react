import React from "react";
import "../../comCss/box2.css";

export default function SearchResult({ headData, jsonData }) {
  return (
    <React.Fragment>
      {/* <div className="search-result-text">hi</div> */}
      <div className="output">
        <table className="product-table">
          <thead>
            <tr>
              {headData.map((data) => {
                return <th key={data}>{data}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {jsonData.map((rowData) => {
              return (
                <tr key={rowData[headData[1]]}>
                  {headData.map((headName) => {
                    return (
                      <td key={rowData[headData[1]] + headName}>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: rowData[headName],
                          }}
                        />
                      </td>
                    );
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
