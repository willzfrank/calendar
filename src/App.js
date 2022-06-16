import React, { useState, useEffect, useContext } from "react";
import Calender from "./component/Calendar";
import { getMonth } from "./utility/GetMonth";
import GlobalContext from "./context/GlobalContext";
import Sidebar from "./component/Sidebar";
import EventModal from "./component/EventModal";
import Grid from "@mui/material/Grid";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  // initialized the currentMonth with the getMonth function created at utilies
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <DndProvider backend={HTML5Backend}>
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
    </DndProvider>
  );
}

export default App;
