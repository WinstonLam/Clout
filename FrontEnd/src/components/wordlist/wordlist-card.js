import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/wordlistcard.css';
import { Paper, Button } from '@mui/material';

export default function WordListCard() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(`/${path}`);
  };

  return (
    <div className="wordlist-card">
      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 500,
          height: '100%',
          flexGrow: 1,
          backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
        }}
      >
        <div className="wordlist-content">
          <div className="wordlist-card-div1">
            <div className="wordlist-card-image">
              <img
                height="50px"
                width="50px"
                src="https://flagsweb.com/images/WEBP/Flag_of_the_Netherlands.webp"
                alt="flag"
              />
            </div>
          </div>
          <div className="wordlist-card-div2">
            <div className="wordlist-card-title">Title</div>
            <div className="wordlist-card-description">description</div>
          </div>
          <div className="wordlist-card-div3">
            plays: 3
            <Button onClick={() => handleNavigate('play')} variant="contained" size="large" align="center">
              play
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
}
