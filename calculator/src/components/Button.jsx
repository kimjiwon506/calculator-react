import React from "react";
import styled from "@emotion/styled";

export default function Button({ state, ...props }) {
  const handleAddNumber = (text, type) => {
    props.onAddToInput(text, type);
    props.onAddOperator(text, type);
  };

  return (
    <>
      <ButtonWrap>
        {state.buttonArray.map((item, index) => (
          <ButtonStyle
            value={item.text}
            key={index}
            type="button"
            background={item.background}
            color={item.color}
            onClick={() => handleAddNumber(item.text, item.type)}
          >
            <div>{item.text}</div>
          </ButtonStyle>
        ))}
      </ButtonWrap>
    </>
  );
}

const ButtonStyle = styled.button`
  background: inherit;
  border: none;
  box-shadow: none;
  padding: 0;
  overflow: visible;
  cursor: pointer;
  border-radius: 50%;
  position: relative;
  width: 100%;
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  text-align: center;
  &::after {
    display: block;
    content: "";
    padding-bottom: 100%;
  }
  div {
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    font-size: 1.8rem;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
  }
`;

const ButtonWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  gap: 10px 10px;
`;
