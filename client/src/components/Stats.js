import React from "react";

function Stats(props) {
  let stats = props.stats;

  return (
    <div className="container">
      <br></br>
      <div className="row">
        <div className="col">
          <h4>
            {stats["Candidates"] ? "Enrolled: " + stats["Candidates"] : " "}
          </h4>
        </div>
        <div className="col">
          <h4>
            {stats["Mean Grade"] ? "Mean Grade: " + stats["Mean Grade"] : " "}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Stats;
