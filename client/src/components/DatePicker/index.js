import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import addDays from "date-fns";
import e from "cors";

registerLocale('es', es);

function DatePicker() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  function onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.startDate)
  }
  return (
    <form onSubmit={ onFormSubmit() }>
        <div className="form-group">
          <DatePicker
            locale="es"
            dateFormat="MM/dd/yyyy"
            minDate={new Date()}
            maxDate={addDays(new Date(), 30)}
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            isClearable={true}
          />
        </div>
      </form>
    );
    // <DatePicker
    //   locale="es"
    //   selectsRange={true}
    //   startDate={startDate}
    //   endDate={endDate}
    //   onChange={(update) => {
    //     setDateRange(update);
    //   }}
    //   isClearable={true}
    // />
};

export default DatePicker;