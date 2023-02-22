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

  const [wordlist, setWordlist] = useState({
    word1: "",
    definition1: "",
    word2: "",
    definition2: "",
    word3: "",
    definition3: "",
    word4: "",
    definition4: "",
    word5: "",
    definition5: "",
    word6: "",
    definition6: "",
    word7: "",
    definition7: "",
    word8: "",
    definition8: "",
    word9: "",
    definition9: "",
    word10: "",
    definition10: "",
  });

  return (
    <div className="container">
      <div className="box">
        <div className="wordlist-header">
          <h1>Create Your Wordlist</h1>
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
            <WordInput
              wordlist={wordlist}
              word={wordlist.word1}
              definition={wordlist.definition1}
              onChangeWord={(e) =>
                setWordlist({ ...wordlist, word1: e.target.value })
              }
              onChangeDefinition={(e) =>
                setWordlist({ ...wordlist, definition1: e.target.value })
              }
            />
            <WordInput
              wordlist={wordlist}
              word={wordlist.word2}
              definition={wordlist.definition2}
              onChangeWord={(e) =>
                setWordlist({ ...wordlist, word2: e.target.value })
              }
              onChangeDefinition={(e) =>
                setWordlist({ ...wordlist, definition2: e.target.value })
              }
            />
            <WordInput
              wordlist={wordlist}
              word={wordlist.word3}
              definition={wordlist.definition3}
              onChangeWord={(e) =>
                setWordlist({ ...wordlist, word3: e.target.value })
              }
              onChangeDefinition={(e) =>
                setWordlist({ ...wordlist, definition3: e.target.value })
              }
            />
            <WordInput
              wordlist={wordlist}
              word={wordlist.word4}
              definition={wordlist.definition4}
              onChangeWord={(e) =>
                setWordlist({ ...wordlist, word4: e.target.value })
              }
              onChangeDefinition={(e) =>
                setWordlist({ ...wordlist, definition4: e.target.value })
              }
            />
            <WordInput
              wordlist={wordlist}
              word={wordlist.word5}
              definition={wordlist.definition5}
              onChangeWord={(e) =>
                setWordlist({ ...wordlist, word5: e.target.value })
              }
              onChangeDefinition={(e) =>
                setWordlist({ ...wordlist, definition5: e.target.value })
              }
            />
            <WordInput
              wordlist={wordlist}
              word={wordlist.word6}
              definition={wordlist.definition6}
              onChangeWord={(e) =>
                setWordlist({ ...wordlist, word6: e.target.value })
              }
              onChangeDefinition={(e) =>
                setWordlist({ ...wordlist, definition6: e.target.value })
              }
            />
            <WordInput
              wordlist={wordlist}
              word={wordlist.word7}
              definition={wordlist.definition7}
              onChangeWord={(e) =>
                setWordlist({ ...wordlist, word7: e.target.value })
              }
              onChangeDefinition={(e) =>
                setWordlist({ ...wordlist, definition7: e.target.value })
              }
            />
            <WordInput
              wordlist={wordlist}
              word={wordlist.word8}
              definition={wordlist.definition8}
              onChangeWord={(e) =>
                setWordlist({ ...wordlist, word8: e.target.value })
              }
              onChangeDefinition={(e) =>
                setWordlist({ ...wordlist, definition8: e.target.value })
              }
            />
            <WordInput
              wordlist={wordlist}
              word={wordlist.word9}
              definition={wordlist.definition9}
              onChangeWord={(e) =>
                setWordlist({ ...wordlist, word9: e.target.value })
              }
              onChangeDefinition={(e) =>
                setWordlist({ ...wordlist, definition9: e.target.value })
              }
            />
            <WordInput
              wordlist={wordlist}
              word={wordlist.word10}
              definition={wordlist.definition10}
              onChangeWord={(e) =>
                setWordlist({ ...wordlist, word10: e.target.value })
              }
              onChangeDefinition={(e) =>
                setWordlist({ ...wordlist, definition10: e.target.value })
              }
            />
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
