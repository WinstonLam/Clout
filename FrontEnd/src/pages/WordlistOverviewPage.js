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
    console.log(client);
    const id = new Id();
    // hardcoded id
    id.setId(1);
    client.loadAllWordlists(id, null, (err, response) => {
      if (err) console.log('failed', err.metadata);
      else {
        console.log('succes', response);
        setWordlist(response.array[0]);
      }
    });
  }, []);

  return (
    <div className="wordlist">
      <div className="wordlist-wrapper">
        <div className="wordlist-inner">
          <div className="wordlist-inner-content">
            {/* make wordlist cards for all the wordlists */}
            {wordlist.map((wordlist) => (
              <WordListCard title={wordlist[0]} description={wordlist[1]} id={wordlist[3]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
