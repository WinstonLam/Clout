import React, { useState } from "react";
import "../styles/word-input.css";
import { TextField } from "@mui/material";

export default function WordInput() {
  const [values, setValues] = useState({
    word: "",
    definition: "",
  });

  return (
    <div className="word-input-line">
      <TextField
        id="word-input"
        label="Type the word"
        value={values.word}
        variant="outlined"
        onChange={(e) => setValues({ ...values, word: e.target.value })}
        style={{ width: "30%" }}
      />
      <TextField
        id="word-input"
        label="Type the definition"
        value={values.definition}
        variant="outlined"
        onChange={(e) => setValues({ ...values, definition: e.target.value })}
        style={{ width: "50%" }}
      />
    </div>
  );
}
