import React, { useState, useEffect, useContext } from "react";
import Calender from "./component/Calendar";
import { getMonth } from "./utility/GetMonth";
import GlobalContext from "./context/GlobalContext";
import Sidebar from "./component/Sidebar";
import EventModal from "./component/EventModal";
import Grid from "@mui/material/Grid";
import Navbar from "./component/Navbar";

function App() {
  // initialized the currentMonth with the getMonth function created at utilies
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{
          backgroundColor: "#fffbfb",
        }}
      >
        <Grid item>
          <Sidebar />
        </Grid>
        <Grid item>
          <Calender month={currentMonth} />
        </Grid>
        <Grid item>{showEventModal && <EventModal />}</Grid>
      </Grid>
    </>
  );
}

export default App;
