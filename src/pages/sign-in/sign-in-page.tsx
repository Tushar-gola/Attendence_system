/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useFormik } from 'formik';
import { SignInPost, SigninInit } from '@/utils';
import { SigninValid } from '@/schemas';
import { usePostApi } from '@/hooks';
function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
export function SignIn() {
  const [disabled, setDisabled] = React.useState(true);
  const { mutation } = usePostApi(SignInPost);
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: SigninInit,
      validationSchema: SigninValid,
      onSubmit: (values) => {
        mutation.mutate(values);
      },
    });
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={errors.email && touched.email ? true : false}
            helperText={errors.email && touched.email ? errors.email : null}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            error={errors.password && touched.password ? true : false}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            helperText={
              errors.password && touched.password ? errors.password : null
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                color="primary"
                onChange={(e) => setDisabled(!e.target.checked)}
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={disabled}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
