import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import RegisterForm from './RegisterForm';

// components
import Iconify from '../../../components/iconify';
// ----------------------------------------------------------------------

export default function LoginForm({onSwitch, buttonName, onClose}) {

  const [success, setSuccess] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleClick = () => {
    setShowRegister(!showRegister);
  };


  const loginFunc = () => {

    if (success) onClose();

  }

  const registerFunc = () => {

    if (success) onClose();

  }

  return (
    <>
      <Stack spacing={3}>
        
        <TextField sx={{color:"white"}} name="email" label="Email address" />
        <TextField
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
        onClick={(buttonName === "Register") ? loginFunc : registerFunc}>
        {buttonName}
      </LoadingButton>
    </>
  );
}
