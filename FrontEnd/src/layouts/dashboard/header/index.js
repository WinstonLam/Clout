import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, Container, IconButton } from '@mui/material';
// utils
import { bgBlur } from '../../../utils/cssStyles';
// components
import Iconify from '../../../components/iconify';
//
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import NotificationsPopover from './NotificationsPopover';
import {AppWidgetSummary,} from '../../../sections/@dashboard/app';
// import LoginPage from '../../../pages/LoginPage';
import RegisterPage from '../../../pages/RegisterPage';
import PopUp from '../../../pages/PopUp';
// import Typography from 'src/theme/overrides/Typography';


// ----------------------------------------------------------------------

const NAV_WIDTH = 0;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  // ...bgBlur({ color: theme.palette.background.default }),
  ...bgBlur ({color: '#280003'}),
  boxShadow: 'none',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    // width: `calc(100% - ${NAV_WIDTH + 1}px)`,
    height: '10%',
    width: '100%',
  },
  zIndex: 1,
  alignContent: "center",
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
  // alignContent: "center",
}));

const buttonStyle = ({
    backgroundColor:"#FFA500",
    "&:hover": {
        background: "#FF8C00"
      },
    color:"black",
    marginTop:20,
    position: "absolute",
    width:"5%",
    // paddingTop:10,
    zIndex:1,
    marginLeft: 1,
    

});

// ----------------------------------------------------------------------

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

export default function Header({user, setUser}) {

    const [showComponent, setShowComponent] = useState(false);
    const navigate = useNavigate();

    // Opens and closes the popup
    const openScreen = () => {

        setShowComponent(!showComponent);

    }

    const navigatePlay = () => {
        navigate('/play', { replace: true });
      };

  return (

    <StyledRoot>

      <PopUp setUser={setUser} open={showComponent} openLogin={openScreen}/>
      {/* {showComponent && <LoginPage />} */}
      {/* {showComponent && (<LoginPage show={showComponent} onClose={() => setShowComponent(false)} />)} */}
      

      <StyledToolbar>

        {/* <AppWidgetSummary height={3} width={5} color="redblack" title="Lingo"> */}
        {user && <p2>Welcome back {user.user.username}!</p2>}
        {!user && <Button onClick={openScreen} variant="contained" size="large" align="center">Login</Button>}
        {/* </AppWidgetSummary> */}
        {/* {user && <p2>Welcome back {user.user.username}!</p2>}
        {!user && <Button onClick={openScreen} variant="contained" size="large" align="center">Login</Button>} */}

        <Button onClick={navigatePlay} size="large" sx={buttonStyle}>Play!</Button>

        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          {/* <LanguagePopover /> */}
          <NotificationsPopover />
          <AccountPopover />
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}
