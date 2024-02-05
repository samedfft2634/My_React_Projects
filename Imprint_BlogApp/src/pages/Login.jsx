import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { loginSchema } from '../components/auth/LoginForm'
import { Formik } from "formik"
import useAuthCalls from '../hooks/useAuthCalls';
import LoginForm from '../components/auth/LoginForm';


export default function SignUp() {
	const { login } = useAuthCalls();

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
            Login
          </Typography>
          <Formik
          initialValues={{
            email:"",
            password:"",

          }}
          validationSchema={loginSchema}
          onSubmit={(values, actions) => {
            login(values)
            actions.resetForm()
            actions.setSubmitting(false)
          }}
          component={(props) => <LoginForm {...props} />}
          >
          </Formik>
        </Box>
      </Container>
  );
}