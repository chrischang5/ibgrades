import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const APIUrl = "http://localhost:5000/api";

function SearchBar(props) {
  const [subject, setSubject] = useState("");
  const [level, setLevel] = useState("");
  const [session, setSession] = useState("");
  const [year, setYear] = useState("");

  const [sessionOptions, setSessionOptions] = useState([]);
  const [subjectNameOptions, setSubjectNameOptions] = useState([]);
  const [levelOptions, setLevelOptions] = useState([]);

  const searchButtonClickHandler = () => {
    props.updateSearchParams({
      subject: subject,
      level: level,
      session: session,
      year: year,
    });

    axios
      .get(
        `${APIUrl}/courses?subject=${subject}&level=${level}&session=${session}&year=${year}`
      )
      .then(
        (response) => {
          props.updateData(response.data);
        },
        (reject) => {
          console.error(reject);
        }
      )
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (year && year !== "") {
      axios
        .get(`${APIUrl}/sessions?year=${year}`)
        .then((result) => {
          setSession(result.data[0]);
          setSessionOptions(result.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [year]);

  useEffect(() => {
    if (year && session && year !== "" && session !== "") {
      axios
        .get(`${APIUrl}/subject_names?year=${year}&session=${session}`)
        .then((result) => {
          setSubjectNameOptions(result.data);
          if (result.data.length) {
            setSubject(result.data[0]);
          } else {
            setSubject("");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [year, session]);

  useEffect(() => {
    if (
      year &&
      session &&
      subject &&
      year !== "" &&
      session !== "" &&
      subject !== ""
    ) {
      let subject_name = encodeURIComponent(subject);
      axios
        .get(
          `${APIUrl}/levels?year=${year}&session=${session}&subject_name=${subject_name}`
        )
        .then((result) => {
          setLevelOptions(result.data);
          if (result.data.length) {
            setLevel(result.data[0]);
          } else {
            setLevel("");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [year, session, subject]);

  return (
    <div className="container">
      <div className="row">
        <div className="col mt-3 center-block text-center">
          <h1>IB Grades Search</h1>
        </div>
      </div>

      <div className="row">
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
            onChange={(e) => setYear(e.target.value)}
            onClick={(e) => setYear(e.target.value)}
          ></input>
        </div>
        <div className="col">
          <label htmlFor="session-field">Session</label>
          <select
            className="form-select"
            name="session-field"
            id="session-field"
            value={session}
            onChange={(e) => {
              setSession(e.target.value);
            }}
            onClick={(e) => setSession(e.target.value)}
            required
          >
            {sessionOptions.map((session) => (
              <option className="dropdown-item" key={session} value={session}>
                {session}
              </option>
            ))}
          </select>
        </div>
        <div className="col">
          <label htmlFor="subject-field">Subject</label>
          <select
            className="form-select"
            name="subject-field"
            id="subject-field"
            type="text"
            placeholder="Subject Name"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            onClick={(e) => setSubject(e.target.value)}
            required
          >
            {subjectNameOptions.map((subject_name) => (
              <option
                className="dropdown-item"
                key={subject_name}
                value={subject_name}
              >
                {subject_name}
              </option>
            ))}
          </select>
        </div>
        <div className="col">
          <label htmlFor="level-field">Level</label>
          <select
            className="form-select"
            name="level-field"
            id="level-field"
            value={level}
            onChange={(e) => {
              setLevel(e.target.value);
            }}
            onClick={(e) => setLevel(e.target.value)}
          >
            {levelOptions.map((level) => (
              <option className="dropdown-item" key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-4" />
        <button
          type="button"
          className="col-4 btn btn-success"
          onClick={() => searchButtonClickHandler()}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
