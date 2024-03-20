import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const SignUp = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const { login } = useAuth();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Adjust the URL according to your API endpoint for user registration
      const response = await axios.post('http://localhost:3001/api/auth/register', userData);
      console.log('Registration successful', response.data);

      // Optionally log the user in after successful registration
      // login(userData);
    } catch (error) {
      console.error('Registration failed', error.response.data);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          value={userData.username}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={userData.email}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={userData.password}
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default SignUp;
