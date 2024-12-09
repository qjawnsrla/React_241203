import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";
import React from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const StyledTextField = styled(TextField)`
  && {
    margin-top: 10px;
    width: 300px;
  }
`;

const StyledButton = styled(Button)`
  && {
    margin-top: 20px;
    width: 300px;
  }
`;

const CardEx = () => {
  return (
    <Container>
      <h1>Material-UI 예제</h1>
      <StyledTextField label="Username" variant="outlined" />
      <StyledTextField label="Password" variant="outlined" type="password" />
      <StyledButton variant="contained" color="primary">
        Login
      </StyledButton>
    </Container>
  );
};
export default CardEx;
