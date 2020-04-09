import React, { useState, createRef } from "react";
import LoginBox from "../components/LoginForm/styles/LoginBox";
import Title from "../components/LoginForm/styles/Title";
import Input from "../components/general/styles/Input";
import Button from "../components/general/styles/Button";
import InputBlock from "../components/general/styles/InputBlock";
import api from "../services/api";
import { useEffect } from "react";
import { useDebouncedCallback } from 'use-debounce';
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const usernameRef = createRef();
  const confirmationRef = createRef();
  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await api.post("/user", {
        username,
        password,
        passwordConfirmation: confirmation
      })
      //TODO show success gloabal toast with redux
      history.push("/login")
    } catch (e) {
      console.log(e.response);
    }
  }

  const [validateUsername] = useDebouncedCallback(async () => {
    try {
      const response = await api.get(`/user/validate/${username}`);
      usernameRef.current.setCustomValidity("");

      console.log(response)
    } catch (e) {

      usernameRef.current.setCustomValidity("Invalid Username");
    }
  }, 500);

  const validatePasswords = async () => {
    if (password && confirmation && password !== confirmation) {
      confirmationRef.current.setCustomValidity("Password and password confirmation do not match");
    } else {
      confirmationRef.current.setCustomValidity("");
    }
  }

  useEffect(() => {
    validatePasswords()
  }, [password, confirmation]);

  useEffect(() => {
    validateUsername();
  }, [username]);

  return (
    <LoginBox onSubmit={handleSubmit}>
      <Title>Signup</Title>
      <InputBlock>
        <label>Username</label>
        <Input
          value={username}
          ref={usernameRef}
          onChange={e => setUsername(e.target.value)}
          required
        />
      </InputBlock>
      <InputBlock>
        <label>Password</label>
        <Input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          required
        />
      </InputBlock>
      <InputBlock>
        <label>Password Confirmation</label>
        <Input
          value={confirmation}
          onChange={e => setConfirmation(e.target.value)}
          ref={confirmationRef}
          type="password"
          required
        />
      </InputBlock>
      <Button>Signup</Button>
    </LoginBox>
  );
};

export default Signup;
