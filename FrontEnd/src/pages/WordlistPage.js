/* eslint-disable */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/wordlist.css';
import { TextField } from '@mui/material';
import WordInput from '../components/wordlist/word-input';
import { WordlistInfo, Word } from '../clientprotos/wordlist/wordlist_pb';

import WordListButtons from '../components/wordlist/wordlist-buttons';

function WordlistPage({ client }) {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/', { replace: true });
  };
  const [values, setValues] = useState({
    title: '',
    description: '',
  });

  const [wordlistState, setWordlist] = useState({
    word1: '',
    definition1: '',
    word2: '',
    definition2: '',
    word3: '',
    definition3: '',
    word4: '',
    definition4: '',
    word5: '',
    definition5: '',
    word6: '',
    definition6: '',
    word7: '',
    definition7: '',
    word8: '',
    definition8: '',
    word9: '',
    definition9: '',
    word10: '',
    definition10: '',
  });

  function onSubmit() {
    console.log(client);
    const list = new wordlist();
    list.setWordlistname(values.title);
    list.setDescription(values.description);
    const words = [];
    for (let i = 1; i <= 10; i++) {
      const newWord = new word();
      newWord.setWord(wordlist[`word${i}`]);
      newWord.setDescription(wordlist[`definition${i}`]);
      words.push(newWord);
    }
    list.setWordsList(words);
    client.addNewWordlist(list, {}, (err, response) => {
      if (err) console.log(err.metadata);
      else console.log(response);
    });
  }

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
            style={{ width: '100%', marginBottom: '10px' }}
          />
          <TextField
            id="word-input"
            label="Description of the wordlist"
            value={values.description}
            variant="outlined"
            onChange={(e) => setValues({ ...values, description: e.target.value })}
            style={{ width: '100%' }}
          />
        </div>
        <div className="wordlist-wrapper">
          <div className="wordlist">
            <WordInput
              wordlist={wordlistState}
              word={wordlistState.word1}
              definition={wordlistState.definition1}
              onChangeWord={(e) => setWordlist({ ...wordlistState, word1: e.target.value })}
              onChangeDefinition={(e) => setWordlist({ ...wordlistState, definition1: e.target.value })}
            />
            <WordInput
              wordlist={wordlistState}
              word={wordlistState.word2}
              definition={wordlistState.definition2}
              onChangeWord={(e) => setWordlist({ ...wordlistState, word2: e.target.value })}
              onChangeDefinition={(e) => setWordlist({ ...wordlistState, definition2: e.target.value })}
            />
            <WordInput
              wordlist={wordlistState}
              word={wordlistState.word3}
              definition={wordlistState.definition3}
              onChangeWord={(e) => setWordlist({ ...wordlistState, word3: e.target.value })}
              onChangeDefinition={(e) => setWordlist({ ...wordlistState, definition3: e.target.value })}
            />
            <WordInput
              wordlist={wordlistState}
              word={wordlistState.word4}
              definition={wordlistState.definition4}
              onChangeWord={(e) => setWordlist({ ...wordlistState, word4: e.target.value })}
              onChangeDefinition={(e) => setWordlist({ ...wordlistState, definition4: e.target.value })}
            />
            <WordInput
              wordlist={wordlistState}
              word={wordlistState.word5}
              definition={wordlistState.definition5}
              onChangeWord={(e) => setWordlist({ ...wordlistState, word5: e.target.value })}
              onChangeDefinition={(e) => setWordlist({ ...wordlistState, definition5: e.target.value })}
            />
            <WordInput
              wordlist={wordlistState}
              word={wordlistState.word6}
              definition={wordlistState.definition6}
              onChangeWord={(e) => setWordlist({ ...wordlistState, word6: e.target.value })}
              onChangeDefinition={(e) => setWordlist({ ...wordlistState, definition6: e.target.value })}
            />
            <WordInput
              wordlist={wordlistState}
              word={wordlistState.word7}
              definition={wordlistState.definition7}
              onChangeWord={(e) => setWordlist({ ...wordlistState, word7: e.target.value })}
              onChangeDefinition={(e) => setWordlist({ ...wordlistState, definition7: e.target.value })}
            />
            <WordInput
              wordlist={wordlistState}
              word={wordlistState.word8}
              definition={wordlistState.definition8}
              onChangeWord={(e) => setWordlist({ ...wordlistState, word8: e.target.value })}
              onChangeDefinition={(e) => setWordlist({ ...wordlistState, definition8: e.target.value })}
            />
            <WordInput
              wordlist={wordlistState}
              word={wordlistState.word9}
              definition={wordlistState.definition9}
              onChangeWord={(e) => setWordlist({ ...wordlistState, word9: e.target.value })}
              onChangeDefinition={(e) => setWordlist({ ...wordlistState, definition9: e.target.value })}
            />
            <WordInput
              wordlist={wordlistState}
              word={wordlistState.word10}
              definition={wordlistState.definition10}
              onChangeWord={(e) => setWordlist({ ...wordlistState, word10: e.target.value })}
              onChangeDefinition={(e) => setWordlist({ ...wordlistState, definition10: e.target.value })}
            />
          </div>
        </div>
        <div className="wordlist-footer">
          <WordListButtons onReturn={navigateHome} onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
}

export default WordlistPage;
