import React, { useState } from "react";
import LoginBox from "./styles/LoginBox";
import Title from "./styles/Title";
import InputBlock from "../general/styles/InputBlock";
import Input from "../general/styles/Input";
import Button from "../general/styles/Button";
import api from '../../services/api';
import { Link, useHistory } from 'react-router-dom'

import { isAuthenticated, login } from '../../services/auth';

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([])
  const history = useHistory();

  if (isAuthenticated()) {
    history.push("/");
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.post("/auth", {
        username,
        password
      });
      login(data)
      setErrors([])
    } catch (e) {
      console.log(e)
      setErrors([].concat(e.response.data))
    }

  }

  return (
    <LoginBox onSubmit={handleLogin}>
      <Title>Login</Title>
      <InputBlock>
        <label>Username</label>
        <Input
          autoFocus
          type="text"
          onChange={e => setUsername(e.target.value)}
          value={username}
          required
        />
      </InputBlock>
      <InputBlock>
        <label>Password</label>
        <Input
          type="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
          required
        />
      </InputBlock>
      {
        errors.map(error => (
          <div>{error.error}</div>
        ))
      }
      <p>Don't have and account? <Link to="/signup"> Click here</Link></p>
      <Button>Log in</Button>
    </LoginBox>
  );
};

export default LoginForm;
