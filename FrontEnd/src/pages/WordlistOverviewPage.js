import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import '../styles/wordlistoverview.css';
import { useNavigate } from 'react-router-dom';
import WordListCard from '../components/wordlist/wordlist-card';
import { UserId } from '../clientprotos/wordlist/wordlist_pb';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function WordlistOverviewPage({ client, user }) {
  const [wordlist, setWordlist] = useState([]);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(`/${path}`);
  };

  useEffect(() => {
    if (user) {
      const Userid = new UserId();

      Userid.setUserid(user.attributes.sub);
      console.log('User id =', Userid);
      client.loadAllWordlists(Userid, null, (err, response) => {
        if (err) console.log('failed', err.metadata);
        else {
          console.log('succes', response);
          setWordlist(response.array[0]);
        }
      });
    }
  }, []);
  console.log(wordlist.length);
  return (
    <div className="wordlist">
      <div className="wordlist-wrapper">
        <h1>Your Wordlists</h1>
        <div className="wordlist-inner">
          <div className="wordlist-inner-content">
            {/* make wordlist cards for all the wordlists */}
            {!user && (
              <>
                <h1>Please login first to create lists</h1>
                <Button variant="contained" onClick={() => handleNavigate('')} size="large" align="center">
                  Return Home
                </Button>
              </>
            )}
            {user && (
              <>
                {wordlist.length !== 0 ? (
                  <>
                    {wordlist.map((wordlist) => (
                      <WordListCard title={wordlist[0]} description={wordlist[1]} id={wordlist[3]} />
                    ))}
                  </>
                ) : (
                  <>
                    <h1>No list created yet</h1>
                    <Button variant="contained" onClick={() => handleNavigate('wordlist')} size="large" align="center">
                      Create Wordlist
                    </Button>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
