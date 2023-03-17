import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';

// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Hub, Auth } from 'aws-amplify';
import RegisterForm from './RegisterForm';
import UserPool from './UserPool';
import { bgBlur } from '../../../utils/cssStyles';

// components
import Iconify from '../../../components/iconify';
// ----------------------------------------------------------------------

const InputField = styled('div')(({ theme }) => ({
  // ...bgColor ({color: '#280003'}),
  backgroundColor: 'white',
  // maxWidth: "80%",
  color: '#FFFFFF',
  borderRadius: 10,
  // paddingTop: 300,
  height: 10,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 12),
  // margin: 'auto',
  // animation: `${animation} 0.5s cubic-bezier(0.65, 0, 0.35, 1) forwards`,
}));

function listenToAutoSignInEvent() {
  Hub.listen('auth', ({ payload }) => {
    const { event } = payload;
    if (event === 'autoSignIn') {
      const user = payload.data;
      // assign user
    } else if (event === 'autoSignIn_failure') {
      // redirect to sign in page
    }
  });
}

export default function LoginForm({ onSwitch, buttonName, onClose, setUser }) {
  const [success, setSuccess] = useState(false);
  const [register, setRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');

  const handleClick = () => {
    setShowRegister(!showRegister);
  };

  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(username, 714423);
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }

  async function registerFunc() {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email, // optional
          // phone_number,   // optional - E.164 number convention
          // other custom attributes
        },
        autoSignIn: {
          // optional - enables auto sign in after user is confirmed
          enabled: true,
        },
      });
      console.log(user);
      setRegister(true);

      // after sign up do not auto sign in
      // localStorage.setItem('user', JSON.stringify(user));
      // setUser(user);
      // onClose();
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  async function loginFunc() {
    try {
      const user = await Auth.signIn(username, password);
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      onClose();
    } catch (error) {
      console.log('error signing in', error);
    }
  }
  return (
    <>
      {register ? (
        <>Sign Up Success!</>
      ) : (
        <>
          <Stack spacing={3}>
            <TextField
              sx={{ color: 'white' }}
              onChange={(event) => setUsername(event.target.value)}
              name="username"
              label="Username"
            />
            {buttonName === 'Register' && (
              <TextField onChange={(event) => setEmail(event.target.value)} name="email" label="Email address" />
            )}
            <TextField
              onChange={(event) => setPassword(event.target.value)}
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {buttonName === 'Register' && (
              <TextField
                onChange={(event) => setConPassword(event.target.value)}
                name="password"
                label="Confirm Password"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          </Stack>

          <LoadingButton
            sx={{ marginTop: 5 }}
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            onClick={buttonName === 'Register' ? registerFunc : loginFunc}
          >
            {buttonName}
          </LoadingButton>
        </>
      )}
    </>
  );
}
