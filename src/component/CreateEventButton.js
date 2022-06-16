import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import Button from "@mui/material/Button";
import { MdOutlineAddCircleOutline } from "react-icons/md";

function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);

  function handleEvent() {
    setShowEventModal(true);
  }
  return (
    <>
      <Button
        startIcon={<MdOutlineAddCircleOutline />}
        variant="outlined"
        onClick={handleEvent}
        sx={{
          borderRadius: "35%",
          boxShadow: 10,
          border: "1px solid var(--borderBgColor) ",
          fontWeight: "bold",
          backgroundColor: "#d5d8f2",
        }}
      >
        <span>
          <bold>Create</bold>
        </span>
      </Button>
    </>
  );
}

export default CreateEventButton;
