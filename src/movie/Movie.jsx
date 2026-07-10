import { MovieCounter } from "./MovieCounter";
import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { useNavigate } from "react-router";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function ClickAway() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles = {
    position: "absolute",
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: "1px solid",
    p: 1,
    bgcolor: "background.paper",
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: "relative" }}>
        <button type="button" onClick={handleClick}>
          Open menu dropdown
        </button>
        {open ? (
          <Box sx={styles}>
            Click me, I will stay visible until you click outside.
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
}

export function Movie({ name, poster, summary, rating, id, deleteBtn }) {
  let [show, setShow] = useState(false);
  const summaryStyle = {
    display: show ? "block" : "none",
  };

  const ratingStyle = {
    color: rating >= 8 ? "green" : "red",
  };

  const dropdownStyles = {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    zIndex: 10,
    border: "1px solid #ccc",
    p: 2,
    bgcolor: "background.paper",
    boxShadow: 3,
    borderRadius: 1,
  };
  const navigate = useNavigate();

  return (
    <div className="movie-container">
      <img src={poster} alt={name + "'s profile pic"} />
      <div className="movie-spec-container">
        <h3 className="movie-name">{name}</h3>
        <IconButton onClick={() => setShow(!show)}>{show? <ExpandLessIcon/> : <ExpandMoreIcon/> }</IconButton>
         <IconButton
        onClick={() => navigate(`/movies/${id}`)}
        aria-label={`${name} info`}
        color="primary"
      >
        <InfoIcon />
      </IconButton>
        <h3 className="movie-rating" style={ratingStyle}>
          {" "}
          ⭐ {rating}
        </h3>
      </div>


      {/* <IconButton onClick={() => setShow(!show)}>{show? <ExpandLessIcon/> : <ExpandMoreIcon/> }</IconButton> */}

      {show ? <p className="movie-summary">{summary}</p> : null}


     

      <div className="box">
        <MovieCounter />
        {deleteBtn}
      </div>
    </div>
  );
}
