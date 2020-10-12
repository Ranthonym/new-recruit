import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

import CandidateCard from "../src/components/CandidateCard/CandidateCard";

const axios = require("axios");

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  const getCandidates = (date) => {
    setSelectedDate(date);
    // console.log(date);
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    // console.log(month, year);
    console.log(date.getDate());
    let fullDate = `${month}/${date.getDate()}/${year}`;
    console.log(fullDate);

    axios
      .get("http://localhost:3001/candidates")
      .then((res) => {
        let data = res.data;
        console.log(data[0].date);
        // data.forEach((e) => {
        //   console.log(`${e.first_name}, ${e.last_name}, ${e.email}`);
        // });
        let chosen = data.filter((candidate) => candidate.date === fullDate);
        console.log(chosen);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
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
      <div></div>
    </div>
  );
}

export default App;
