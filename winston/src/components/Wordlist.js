import React, { useState } from "react";
import "../styles/wordlist.css";
import WordInput from "./word-input";
import { TextField } from "@mui/material";
import WordListButtons from "./wordlist-buttons";

function Wordlist() {
  const [values, setValues] = useState({
    title: "",
    description: "",
  });

  return (
    <div className="container">
      <div className="box">
        <div className="wordlist-header">
          <h1>Wordlist</h1>
          <TextField
            id="word-input"
            label="Title of the wordlist"
            value={values.title}
            variant="outlined"
            onChange={(e) => setValues({ ...values, title: e.target.value })}
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <TextField
            id="word-input"
            label="Description of the wordlist"
            value={values.description}
            variant="outlined"
            onChange={(e) =>
              setValues({ ...values, description: e.target.value })
            }
            style={{ width: "100%" }}
          />
        </div>
        <div className="wordlist-wrapper">
          <div className="wordlist">
            <WordInput />
            <WordInput />
            <WordInput />
            <WordInput />
            <WordInput />
            <WordInput />
            <WordInput />
            <WordInput />
            <WordInput />
            <WordInput />
          </div>
        </div>
        <div className="wordlist-footer">
          <WordListButtons />
        </div>
      </div>
    </div>
  );
}

export default Wordlist;
