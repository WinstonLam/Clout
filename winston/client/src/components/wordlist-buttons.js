import React from "react";
import { Button } from "@mui/material";
import "../styles/wordlist-buttons.css";

export default function WordListButtons({ createWordlist }) {
  return (
    <div className="wordlist-buttons-wrapper">
      <div className="wordlist-buttons">
        <Button variant="contained">Back</Button>
        <Button variant="contained" onClick={createWordlist}>
          Create
        </Button>
      </div>
    </div>
  );
}
