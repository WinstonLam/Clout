import { useState } from 'react';

// @mui
import { Stack, IconButton, InputAdornment, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
    },
  });

  return (
    <>
      <Stack spacing={3}>
        <ThemeProvider theme={theme}>
          <TextField color="primary" sx={{ input: { color: 'white' } }} name="username" label="Username" focused />

          <TextField color="primary" sx={{ input: { color: 'white' } }} name="email" label="Email address" focused />

          <TextField
            color="primary"
            sx={{ input: { color: 'white' } }}
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

          <TextField
            color="primary"
            sx={{ input: { color: 'white' } }}
            name="conpassword"
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
        </ThemeProvider>
      </Stack>

      {/* <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack> */}

      <LoadingButton sx={{ marginTop: 5 }} fullWidth size="large" type="submit" variant="contained">
        Register
      </LoadingButton>
      <LoadingButton sx={{ marginTop: 1 }} fullWidth size="large" type="submit" variant="contained">
        Back to login
      </LoadingButton>
    </>
  );
}
