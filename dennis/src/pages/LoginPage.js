import { Helmet } from 'react-helmet-async';
// @mui
// import styled, { keyframes } from 'styled-components';
import { styled, keyframes } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/logo';
import Iconify from '../components/iconify';
// sections
import { LoginForm } from '../sections/auth/login';
// utils
import { bgBlur } from '../utils/cssStyles';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
    ...bgBlur ({color: '#000000', opacity: 0.6}),
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    [theme.breakpoints.up('md')]: {
        display: 'flex',
    },
    zIndex: 2,
}));

const flyIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledContent = styled('div')(({ theme }) => ({
    ...bgBlur ({color: '#280003'}),
    maxWidth: 580,
    color: "#FFFFFF",
    borderRadius: 10,
    paddingTop: 100,
    minHeight: '50vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 12),
    margin: 'auto',
  animation: `${flyIn} 0.5s cubic-bezier(0.65, 0, 0.35, 1) forwards`,
}));

// ----------------------------------------------------------------------


export default function LoginPage({show, onClose}) {
  const mdUp = useResponsive('up', 'md');

  return (
    <>
      <Helmet>
        <title> Login </title>
      </Helmet>

      <StyledRoot>
        <Container maxWidth="sm">
          {/* <div style={{ ...styles.floatingDiv, ...(isVisible && styles.visible) }}> */}
          <StyledContent>
            <Typography variant="h4" gutterBottom>
              Sign in to Lingo
            </Typography>

            <Typography variant="body2" sx={{ mb: 5 }}>
              Don’t have an account? {''}
              <Link variant="subtitle2">Get started</Link>
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
              </Button>

              <Button fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon="eva:facebook-fill" color="#1877F2" width={22} height={22} />
              </Button>

              <Button fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={22} height={22} />
              </Button>
            </Stack>

            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" sx={{ color: '#FFFFFF' }}>
                OR
              </Typography>
            </Divider>

            <LoginForm />
          </StyledContent>
          {/* </div> */}
        </Container>
      </StyledRoot>
    </>
  );
}
