import React from "react";
import styled from "@emotion/styled";

export default function Input({ state }) {
  return (
    <>
      <InputStyle type="text" value={state.inputValue || ""} readOnly />
    </>
  );
}

const InputStyle = styled.input`
  border: none;
  height: 50px;
  width: 98%;
  font-size: 58px;
  background: #111111;
  box-shadow: none;
  border-radius: 0;
  color: #ffffff;
  text-align: right;
  margin-bottom: 20px;
  :focus {
    outline: none;
  }
`;
