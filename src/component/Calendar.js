import React from "react";
import CalenderHeader from "./CalenderHeader";
import Grid from "@mui/material/Grid";
import paper from "@mui/material/Paper";

import Day from "./Day";
import { Container } from "@mui/material";

function Calendar({ month }) {
  return (
    <Container>
      <CalenderHeader />
      <Grid container spacing={0}>
        {month.map((week, i) => (
          <React.Fragment key={i}>
            {week.map((day, idx) => (
              <Grid item xs={1.7} md={1.7} lg={1.7} p={4} className=" border">
                <paper elevation={0} variant="outlined" alignItems="flex-start">
                  <Day day={day} key={idx} weekindx={i} />
                </paper>
              </Grid>
            ))}
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  );
}

export default Calendar;
