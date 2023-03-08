import React, { useState } from 'react';

import { Helmet } from 'react-helmet-async';
// @mui
// import styled, { keyframes } from 'styled-components';
import { styled, keyframes } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button, Grid } from '@mui/material';

// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/logo';
import Iconify from '../components/iconify';
// sections
import { LoginForm } from '../sections/auth/login';
// utils
import { bgBlur } from '../utils/cssStyles';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import './PopUp.css';

// ----------------------------------------------------------------------


const StyledContent = styled('div')(({ theme }) => ({
    ...bgBlur ({color: '#280003'}),
    maxWidth: 580,
    color: "#FFFFFF",
    borderRadius: 10,
    paddingTop: 300,
    minHeight: '50vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 12),
    // margin: 'auto',
    // animation: `${animation} 0.5s cubic-bezier(0.65, 0, 0.35, 1) forwards`,
}));

// ----------------------------------------------------------------------


export default function PopUp({open, openLogin}) {
  const mdUp = useResponsive('up', 'md');

  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(true);

  const switchScreen = () => {

    console.log(`${login} and ${register}`);
    setLogin(!login);
    setRegister(!register);
    console.log(`${login} and ${register} after function`);

  }



  
  return (
    <>
    
      <Helmet>
        <title> Login </title>
      </Helmet>

      <Grid item xs={12} md={6} lg={7}>
        <div className={`${!(open) ? "active" : ""} show`}>
          {login && <LoginPage onSwitch={switchScreen} onClose={openLogin}/>}
          {register && <RegisterPage onSwitch={switchScreen} onClose={openLogin}/>}
        </div>
      </Grid>

    </>
  );
}
