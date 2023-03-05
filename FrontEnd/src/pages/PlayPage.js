import React, { useState, useEffect } from 'react';
// import React from 'react';

// import { DataGrid } from '@mui/x-data-grid';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Wordle from '../components/wordle/Wordle';

// sections
import { AppNewsUpdate, AppWebsiteVisits, AppWidgetSummary, HiscoreTable } from '../sections/@dashboard/app';
import PopUp from './PopUp';

// ----------------------------------------------------------------------

export default function PlayPage() {
  const [solution, setSolution] = useState('sicko');

  // useEffect(() => {
  //     fetch('http://localhost:3001/solutions')
  //     .then(res => res.json())
  //     .then(json => {
  //         // random int between 0 & 14
  //         const randomSolution = json[Math.floor(Math.random()*json.length)]
  //         setSolution(randomSolution.word)
  //     })
  // }, [setSolution])

  const theme = useTheme();
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    <PopUp show={showComponent} onClose={() => setShowComponent(false)} />;
    setShowComponent(!showComponent);
  };

  return (
    <>
      <Helmet>
        <title> Play Wordle! </title>
      </Helmet>

      {/* {showComponent && (<PopUp show={showComponent} onClose={() => setShowComponent(false)} />)} */}

      <Container sx={{ marginTop: '5%' }} maxWidth="xl">
        <Grid container spacing={5}>
          <div className="App">
            <h1>Wordle (Lingo)</h1>
            <Wordle solution={solution} setSolution={setSolution} />
            {/* {solution && <Wordle solution={solution} />} */}
          </div>
        </Grid>
      </Container>
    </>
  );
}
