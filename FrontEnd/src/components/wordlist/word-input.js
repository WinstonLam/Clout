import React from "react";
import "../../styles/word-input.css";
import { TextField } from "@mui/material";

export default function WordInput({
  onChangeWord,
  onChangeDefinition,
  word,
  definition,
}) {
  return (
    <div className="word-input-line">
      <TextField
        id="word-input"
        label="Type the word"
        value={word}
        variant="outlined"
        onChange={onChangeWord}
        style={{ width: "30%" }}
      />
      <TextField
        id="word-input"
        label="Type the definition"
        value={definition}
        variant="outlined"
        onChange={onChangeDefinition}
        style={{ width: "50%" }}
      />
    </div>
  );
}
