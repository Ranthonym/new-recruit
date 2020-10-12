import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

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
        isClearable
        showMonthDropdown
        scrollableMonthYearDropdown
        placeholderText="Click to select a date"
      />
    </div>
  );
}

export default App;
