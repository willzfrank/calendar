import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import Grid from "@mui/material/Grid";

import { MdOutlinePersonOutline } from "react-icons/md";

export default function Labels() {
  const { labels, updateLabel } = useContext(GlobalContext);
  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        justifyContent="center"
        style={{
          border: "2px solid red",
        }}
      >
        <Grid item>
          <p>
            <strong>Calendars</strong>
          </p>
        </Grid>

        <Grid item>
          <label className="items-center mt-3 block">
            <input type="checkbox" checked="true" />
            <span>
              <strong>Admin's Calendar</strong>
            </span>
          </label>
        </Grid>
        <Grid
          item
          className="mt-5"
        >
          <p>Interview Status</p>
        </Grid>
        {labels.map(({ label: lbl, checked }, idx) => (
          <Grid item>
            <label key={idx} className="items-center mt-3 block">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => updateLabel({ label: lbl, checked: !checked })}
                className={`form-checkbox h-5 w-5 text-${lbl}-400 rounded focus:ring-0 cursor-pointer`}
              />
              <span className="ml-2 text-gray-700 capitalize">{lbl}</span>
            </label>
          </Grid>
        ))}
      </Grid>
      <Grid item>
        <p>Interview Type</p>
      </Grid>

      <Grid item>
        <label className="items-center mt-3 block">
          <input type="checkbox" />
          <span>All</span>
        </label>
      </Grid>
      <Grid item>
        <label className="items-center mt-3 block">
          <input type="checkbox" />
          <span>
            {" "}
            <MdOutlinePersonOutline />
            in person
          </span>
        </label>
      </Grid>
      <Grid item>
        <label className="items-center mt-3 block">
          <input type="checkbox" />
          <span>
            <i class="uil uil-mobile-android"></i>phone
          </span>
        </label>
      </Grid>
      <Grid item>
        <label className="items-center mt-3 block">
          <input type="checkbox" />
          <span>
            <i class="uil uil-laptop"></i>Online
          </span>
        </label>
      </Grid>
    </React.Fragment>
  );
}
