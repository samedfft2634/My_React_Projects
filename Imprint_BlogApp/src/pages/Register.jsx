import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import RegisterForm, { registerSchema } from '../components/auth/RegisterForm'
import { Formik } from "formik"
import useAuthCalls from '../hooks/useAuthCalls';


export default function SignUp() {
	const { register } = useAuthCalls();

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
            Sign Up
          </Typography>
          <Formik
          initialValues={{
            username:"",
            firstName:"",
            lastName:"",
            email:"",
            image:"",
            bio:"",
            password:"",

          }}
          validationSchema={registerSchema}
          onSubmit={(values, actions) => {
            register(values)
            actions.resetForm()
            actions.setSubmitting(false)
          }}
          component={(props) => <RegisterForm {...props} />}
          >
          </Formik>
        </Box>
      </Container>
  );
}