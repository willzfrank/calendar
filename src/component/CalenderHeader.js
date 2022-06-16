import React, { useContext } from "react";
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
// import { FaAngleLeft } from "react-icons/fa";
// import { FaAngleRight } from "react-icons/fa";

function CalenderHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }

  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }

  function handleReset() {
    setMonthIndex(dayjs().month());
  }
  return (
    <header className="px-4 py-2 flex calendarHeader--header ">
      <Grid container spacing={3}>
        <Grid item spacing={3}>
          <Button
            variant="outlined"
            className="calendarHeader--todayBtn"
            onClick={handleReset}
          >
            Today
          </Button>
        </Grid>
        <Grid item spacing={3} direction="row">
          <Button
            variant="outlined"
            size="small"
            className="calendarHeaderBtn"
            onClick={handlePrevMonth}
          >
            <i class="uil uil-angle-left-b" onClick={handlePrevMonth}></i>
          </Button>
        </Grid>
        <Grid item spacing={3}>
          <Button
            variant="outlined"
            size="small"
            className="calendarHeaderBtn"
            onClick={handleNextMonth}
          >
            <i class="uil uil-angle-right-b" onClick={handleNextMonth}></i>
          </Button>
        </Grid>
        <Grid item spacing={3}>
          <h2 className="calendarHeader--headerText">
            {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
          </h2>
        </Grid>
      </Grid>
    </header>
  );
}

export default CalenderHeader;
