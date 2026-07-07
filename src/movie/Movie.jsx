import { MovieCounter } from "./MovieCounter";
import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useNavigate } from "react-router";

export default function ClickAway() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };


  const styles = {
    position: 'absolute',
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    p: 1,
    bgcolor: 'background.paper',
  };

   return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: 'relative' }}>
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

export function Movie({ name, poster, summary, rating, id }) {
   
  let [show, setShow] = useState(false);
  const summaryStyle={
    display: show ? "block" : "none"
  }

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const ratingStyle = {
    color: rating >= 8 ? "green" : "red"
  };

  const dropdownStyles = {
    position: 'absolute',
    top: '100%', 
    left: 0,
    right: 0,
    zIndex: 10,
    border: '1px solid #ccc',
    p: 2,
    bgcolor: 'background.paper',
    boxShadow: 3,
    borderRadius: 1
  };
  const navigate=useNavigate();
  
  return (
    <div className="movie-container">
      <img src={poster} alt={name + "'s profile pic"} />
      <div className="movie-spec-container">
        <h3 className="movie-name">{name}</h3>
        <h3 className="movie-rating" style ={ratingStyle}> ⭐ {rating}</h3>
      </div>

      
      <ClickAwayListener onClickAway={handleClickAway}>
        <Box sx={{ position: 'relative', display: 'inline-block', width: '100%' }}>
          
          <button className="summary-toggle" type="button" onClick={handleClick}>
            💡Toggle Summary
          </button>



          <button onClick={()=> navigate(`/movies/${id}`)}>Info</button>






          {open ? (
            <Box sx={dropdownStyles} className="movie-summary">
              {summary}
            </Box>
          ) : null}

        </Box>
      </ClickAwayListener>
      <MovieCounter/>
      
    </div>
  );
}
