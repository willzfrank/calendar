import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import Grid from "@mui/material/Grid";

import { MdOutlinePersonOutline } from "react-icons/md";

export default function Labels() {
  const { labels, updateLabel } = useContext(GlobalContext);
  return (
    <React.Fragment>
      <Grid container direction="column" justifyContent="center">
        <Grid item>
          <p>
            <strong>Calendars</strong>
          </p>
        </Grid>

        <Grid item>
          <label>
            <input type="checkbox" checked="true" />
            <span>
              <p className="mb-5 mt-5">
                <strong>Admin's Calendar</strong>
              </p>
            </span>
          </label>
        </Grid>
        <Grid item>
          <p className="mt-5">
            <strong>Interview Status</strong>
          </p>
        </Grid>
        {labels.map(({ label: lbl, checked }, idx) => (
          <Grid item className="mt-5">
            <label key={idx}>
              <input
                type="checkbox"
                checked={checked}
                onChange={() => updateLabel({ label: lbl, checked: !checked })}
                className={`form-checkbox h-5 w-5 text-${lbl}-400 rounded focus:ring-0 cursor-pointer`}
              />
              <span
                style={{
                  borderRadius: "50%",
                  backgroundColor: lbl,
                  border: "2px solid black",
                  width: "100%",
                }}
              >
                ...
              </span>
            </label>
          </Grid>
        ))}
      </Grid>
      <Grid item>
        <p className="mb-5 mt-5">
          <strong>Interview Type</strong>
        </p>
      </Grid>

      <Grid item>
        <label className="mt-5">
          <input type="checkbox" />
          <span>All</span>
        </label>
      </Grid>
      <Grid item>
        <label className="mt-5">
          <input type="checkbox" />
          <span>
            {" "}
            <MdOutlinePersonOutline />
            in person
          </span>
        </label>
      </Grid>
      <Grid item>
        <label className="mt-5">
          <input type="checkbox" />
          <span>
            <i class="uil uil-mobile-android"></i>phone
          </span>
        </label>
      </Grid>
      <Grid item>
        <label className="mt-5">
          <input type="checkbox" />
          <span>
            <i class="uil uil-laptop"></i>Online
          </span>
        </label>
      </Grid>
    </React.Fragment>
  );
}
