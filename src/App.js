import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

import CandidateCard from "../src/components/CandidateCard/CandidateCard";

const axios = require("axios");

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [candidateList, setCandidateList] = useState("");

  // helper function that fetches api data and filters candidates based on date selected by user
  const getCandidates = (date) => {
    setSelectedDate(date);
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let fullDate = `${month}/${date.getDate()}/${year}`;

    axios
      .get("http://localhost:3001/candidates")
      .then((res) => {
        let data = res.data;
        let chosen = data.filter((candidate) => candidate.date === fullDate);
        setCandidateList(chosen);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <h1 className="App-header">NEW RECRUIT</h1>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => getCandidates(date)}
        // onChange={(date) => setSelectedDate(date)}
        minDate={new Date()}
        // isClearable
        showMonthDropdown
        scrollableMonthYearDropdown
        placeholderText="Click to select a date"
      />
      {candidateList.length > 0 ? (
        <div className="candidate-list">
          {candidateList.map((candidate) => (
            <CandidateCard key={candidate.id} candidate={candidate} />
          ))}
        </div>
      ) : (
        <div className="empty-list">No candidates booked for this date</div>
      )}
    </div>
  );
}

export default App;
