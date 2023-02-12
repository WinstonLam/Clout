import React from "react";
import { Button } from "@mui/material";
import "../styles/wordlist-buttons.css";

export default function WordListButtons() {
  return (
    <div className="wordlist-buttons-wrapper">
      <div className="wordlist-buttons">
        <Button variant="contained">Create</Button>
        <Button variant="contained">Back</Button>
      </div>
    </div>
  );
}
