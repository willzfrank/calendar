import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import { MdOutlineDragHandle } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Button from "@mui/material/Button";
import { MdClose } from "react-icons/md";
import { FcClock } from "react-icons/fc";
import { BsBookmark } from "react-icons/bs";
import { MdSegment } from "react-icons/md";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";

const conf = "#43b922";
const pend = "#f9bc00";
const resch = "#3d98f8";
const avail = "#7a7a7b";

const labelsClasses = [conf, pend, resch, avail];

function EventModal() {
  const {
    setShowModal,
    setShowEventModal,
    daySelected,
    dispatchCalEvent,
    selectedEvents,
  } = useContext(GlobalContext);

  const [title, setTitle] = useState(
    selectedEvents ? selectedEvents.title : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvents
      ? labelsClasses.find((lbl) => lbl === selectedEvents.label)
      : labelsClasses[0]
  );
  const [description, setDescription] = useState(
    selectedEvents ? selectedEvents.description : ""
  );

  // function closeEvent() {
  //   setShowModal(false);
  // }

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvents ? selectedEvents.id : Date.now(),
    };
    if (selectedEvents) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }

    setShowEventModal(false);
  }

  const ariaLabel = { "aria-label": "description" };
  return (
    <div>
      <Box
        component="form"
        // sx={{
        //   "& > :not(style)": { m: 1 },
        // }}
        noValidate
        autoComplete="off"
      >
        <header className="eventModalForm--header">
          <span className="eventModalForm--icon">
            <MdOutlineDragHandle />
          </span>
          <div>
            {selectedEvents && (
              <button onClick={() => setShowEventModal(false)}>
                <span
                  className="eventModalForm--icon"
                  onClick={() => {
                    dispatchCalEvent({
                      type: "delete",
                      payload: selectedEvents,
                    });
                    setShowEventModal(false);
                  }}
                >
                  <MdOutlineDelete />
                </span>
              </button>
            )}
            <button onClick={() => setShowEventModal(false)}>
              <span className="eventModalForm--icon">
                <MdClose />
              </span>
            </button>
          </div>
        </header>
        <div>
          <Grid container spacing={3} justifyContent="flex-end">
            <Grid item>
              <div></div>
            </Grid>
            <Grid item>
              <Input
                type="text"
                name="title"
                placeholder="Add Title"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
                inputProps={ariaLabel}
                className="title--placeholder"
              />
            </Grid>
          </Grid>
          <Grid
            container
            columnSpacing={{ xs: 1, sm: 2, md: 6 }}
            sx={{ my: 2 }}
          >
            <Grid item>
              <span className="eventModalForm--icon">
                <FcClock />
              </span>
            </Grid>
            <Grid item>
              <p className="eventModalForm--dateText">
                {daySelected.format("dddd, MMMM DD")}
              </p>
            </Grid>
          </Grid>

          <div>
            <Grid container spacing={3} justifyContent="flex-end">
              <Grid item>
                <span>
                  <MdSegment />
                </span>
              </Grid>
              <Grid item>
                <Input
                  type="text"
                  name="description"
                  placeholder="Add Description"
                  value={description}
                  required
                  onChange={(e) => setDescription(e.target.value)}
                  inputProps={ariaLabel}
                />
              </Grid>
            </Grid>

            <Grid
              container
              // rowSpacing={1}
              columnSpacing={{ xs: 3, sm: 3, md: 3 }}
              sx={{ my: 2 }}
            >
              <Grid item>
                <span>
                  <BsBookmark />
                </span>
              </Grid>
              <Grid item>
                <div>
                  {labelsClasses.map((lblClass, i) => (
                    <span
                      key={i}
                      onClick={() => setSelectedLabel(lblClass)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",

                        backgroundColor: `${lblClass}`,
                        cursor: "pointer",
                        borderRadius: "9999px",
                        width: "1.5rem",
                        height: "1.5rem",
                        marginRight: "5px",
                        padding: "0.5rem",
                        fontSize: "20px",
                      }}
                    >
                      {selectedLabel === lblClass && (
                        <span>
                          <AiOutlineCheckCircle />
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Grid item>
            <footer>
              <Button type="submit" variant="outlined" onClick={handleSubmit}>
                save
              </Button>
            </footer>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default EventModal;
