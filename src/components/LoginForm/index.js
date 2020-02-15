import React, { useState } from "react";
import LoginBox from "./styles/LoginBox";
import Title from "./styles/Title";
import InputBlock from "../general/styles/InputBlock";
import Input from "../general/styles/Input";
import Button from "../general/styles/Button";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <LoginBox>
      <Title>Login</Title>
      <InputBlock>
        <label>Username</label>
        <Input type="text" onChange={e => setUsername(e.target.value)} value={username} />
      </InputBlock>
      <InputBlock>
        <label>Password</label>
        <Input type="password" onChange={e => setPassword(e.target.value)} value={password} />
      </InputBlock>
      <Button>Log in</Button>
    </LoginBox>
  );
};

export default LoginForm;
