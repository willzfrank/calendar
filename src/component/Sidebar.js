import React from "react";
import CreateEventButton from "./CreateEventButton";
import Labels from "./Labels";
import Grid from "@mui/material/Grid";

export default function Sidebar() {
  return (
    <aside>
      <Grid
        container
        spacing={3}
        direction="column"
        justifyContent="center"
        alignItems="center"
        
      >
        <Grid item>
          <CreateEventButton />
        </Grid>
        <Grid item>
          <Labels />
        </Grid>
      </Grid>
    </aside>
  );
}
