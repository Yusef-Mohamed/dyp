import React from "react";
import "./memberbenifits.css";
function Memberbenifits() {
  return (
    <div className="memberbenifits">
      <div style={{ backgroundColor: "#ededed" }} className="p-5">
        <p className="container p-5 text-center">
          <b> iGenius helps people</b> solve their problems in new and brilliant
          ways.
        </p>
      </div>
      <div className="container py-5">
        <div className="text-center">
          <h1 className="heading">Benefits</h1>
          <p style={{ fontSize: "20px" }} className="my-5">
            iGenius has a membership for anyone interested in improving their
            relationship with money.
          </p>
        </div>
        <table>
          <thead>
            <tr>
              <td>Core Benefits</td>
              <td>Choice</td>
              <td>Select</td>
              <td>Select</td>
              <td>Elite</td>
              <td>Core Benefits</td>
              <td>Choice</td>
              <td>Choice</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>One-Time Fee </td>
              <td>$99.99 </td>
              <td>$99.99 </td>
              <td>$99.99 </td>
              <td>$99.99 </td>
              <td>One-Time Fee </td>
              <td>$99.99 </td>
              <td>$99.99 </td>
            </tr>
            <tr>
              <td>One-Time Fee </td>
              <td>$99.99 </td>
              <td>$99.99 </td>
              <td>$99.99 </td>
              <td>$99.99 </td>
              <td>One-Time Fee </td>
              <td>$99.99 </td>
              <td>$99.99 </td>
            </tr>
            <tr>
              <td>One-Time Fee </td>
              <td>$99.99 </td>
              <td>$99.99 </td>
              <td>$99.99 </td>
              <td>$99.99 </td>
              <td>One-Time Fee </td>
              <td>$99.99 </td>
              <td>$99.99 </td>
            </tr>
            <tr>
              <td>One-Time Fee </td>
              <td>$99.99 </td>
              <td>$99.99 </td>
              <td>$99.99 </td>
              <td>$99.99 </td>
              <td>One-Time Fee </td>
              <td>$99.99 </td>
              <td>$99.99 </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Memberbenifits;
