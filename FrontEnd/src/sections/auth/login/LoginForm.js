import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';

// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import RegisterForm from './RegisterForm'; 
import UserPool from "./UserPool"
import { bgBlur } from '../../../utils/cssStyles';

// components
import Iconify from '../../../components/iconify';
// ----------------------------------------------------------------------

const InputField = styled('div')(({ theme }) => ({
  // ...bgColor ({color: '#280003'}),
  backgroundColor: 'white',
  // maxWidth: "80%",
  color: "#FFFFFF",
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

export default function LoginForm({onSwitch, buttonName, onClose, setUser}) {

  const [success, setSuccess] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");

  const handleClick = () => {
    setShowRegister(!showRegister);
  };

  const loginFunc = (event) => {

    const attributeList = [];

    const userName = {
      Name: "email",
      Value: email
    }

    attributeList.push(userName);

    event.preventDefault();
    UserPool.signUp(username, password, attributeList, null, (err, data) => {

      if (err) {
        console.error(err);
      } else {
        localStorage.setItem('user', JSON.stringify(data));
        setUser(data);
        onClose();
      }

      
      console.log(data);

    })

  }

  const registerFunc = () => {

    if (success) onClose();

  }

  return (
    <>
      <Stack spacing={3}>
        <TextField 
          onChange={(event) => setUsername(event.target.value)}
          name="username" 
          label="Username" 
        />
        {(buttonName === 'Register') &&
        <TextField 
          onChange={(event) => setEmail(event.target.value)}
          name="email" 
          label="Email address" 
        />}
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
        {(buttonName === 'Register') &&
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
                  />}
      </Stack>

      <LoadingButton sx={{marginTop: 5}}fullWidth size="large" type="submit" variant="contained" 
        onClick={(buttonName === "Register") ? loginFunc : loginFunc}>
        {buttonName}
      </LoadingButton>
    </>
  );
}
