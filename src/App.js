import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

const axios = require("axios");

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  axios
    .get("http://localhost:3001/candidates")
    .then((res) => {
      let data = res.data;
      data.forEach((e) => {
        console.log(`${e.first_name}, ${e.last_name}, ${e.email}`);
      });
    })
    .catch((error) => {
      console.log(error);
    });

  const getCandidates = (date) => {
    setSelectedDate(date);
    console.log(date);
    console.log(date.getDate());
    console.log(date.toDateString());
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
    </div>
  );
}

export default App;
