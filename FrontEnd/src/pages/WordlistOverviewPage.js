import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import '../styles/wordlistoverview.css';
import { useNavigate } from 'react-router-dom';
import WordListCard from '../components/wordlist/wordlist-card';
import { Id } from '../clientprotos/wordlist/wordlist_pb';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function WordlistOverviewPage({ client }) {
  const [wordlist, setWordlist] = useState([]);

  useEffect(() => {
    const id = new Id();
    id.setId(1);
    client.loadAllWordlists(id, null, (err, response) => {
      if (err) console.log('failed', err.metadata);
      else {
        console.log('succes', response);
        setWordlist(response);
      }
    });
  }, []);

  return (
    <div className="wordlist">
      <div className="wordlist-wrapper">
        <div className="wordlist-inner">
          <div className="wordlist-inner-content">
            <WordListCard />
            <WordListCard />
            <WordListCard />
            <WordListCard />
            <WordListCard />
            <WordListCard />
            <WordListCard />
            <WordListCard />
          </div>
        </div>
      </div>
    </div>
  );
}
