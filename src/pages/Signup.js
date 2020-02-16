import React, { useState } from "react";
import LoginBox from "../components/LoginForm/styles/LoginBox";
import Title from "../components/LoginForm/styles/Title";
import Input from "../components/general/styles/Input";
import Button from "../components/general/styles/Button";
import InputBlock from "../components/general/styles/InputBlock";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");

  return (
    <LoginBox
      onSubmit={e => {
        e.preventDefault();
        alert(username + " " + password + " " + confirmation);
        setUsername("");
        setPassword("");
        setConfirmation("");
      }}
    >
      <Title>Signup</Title>

      <InputBlock>
        <label>Username</label>
        <Input value={username} onChange={e => setUsername(e.target.value)} />
      </InputBlock>
      <InputBlock>
        <label>Password</label>
        <Input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
        />
      </InputBlock>
      <InputBlock>
        <label>Password Confirmation</label>
        <Input
          value={confirmation}
          onChange={e => setConfirmation(e.target.value)}
          type="password"
        />
      </InputBlock>
      <Button>Signup</Button>
    </LoginBox>
  );
};

export default Signup;
