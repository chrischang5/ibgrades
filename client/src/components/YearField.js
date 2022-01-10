import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function YearField(props) {
  const [year, setYear] = useState(2018);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/sessions?year=${year}`)
      .then((result) => {
        let sessions = [];
        result.data.map((e, key) => {
          sessions.push(e._id);
        });
        setSessionOptions(sessions);
      }).catch((err) => {
        console.error(err);
      });
  }, [year]);

  const yearUpdated = e => {
    setYear(e.target.value)
    props.setYear(e)
  }

  return (
    <div className="col">
      <label htmlFor="year-field">Year</label>
      <input
        className="form-control"
        name="year-field"
        id="year-field"
        type="number"
        min="2000"
        max="2022"
        placeholder="Year"
        value={year}
        onChange={(e) => yearUpdated(e)}
      ></input>
    </div>
  );
}
