import React, { useState, useRef } from "react";
import styled from '@emotion/styled'

import Input from "../components/Input";
import Button from '../components/Button';
/**
 * - +, -, *, / 버튼을 누르면 지금까지 입력한 값을 저장해야됨
 * - 혹시 그 전에 입력해서 계산한 값이 있으면 거기에 입력한 값을 같이 연산해야됨
 * - 연산자 버튼을 클릭하고 나면 그 이후에 숫자를 입력했을때 화면이 초기화 되어야함
 */

/** state, useRef 차이 : 화면에 보여지는지 */
const STATE = {
  inputValue: "",
  buttonArray: [
    { text: "C", background: "#A29D95", color: "#111111" },
    { text: "+/-", background: "#A29D95", color: "#111111" },
    { text: "%", background: "#A29D95", color: "#111111" },
    { text: "÷", background: "#FFB039", color: "#ffffff", type: "operator" },
    { text: "7", background: "#484242", color: "#ffffff", type: "number" },
    { text: "8", background: "#484242", color: "#ffffff", type: "number" },
    { text: "9", background: "#484242", color: "#ffffff", type: "number" },
    { text: "x", background: "#FFB039", color: "#ffffff", type: "operator" },
    { text: "4", background: "#484242", color: "#ffffff", type: "number" },
    { text: "5", background: "#484242", color: "#ffffff", type: "number" },
    { text: "6", background: "#484242", color: "#ffffff", type: "number" },
    { text: "-", background: "#FFB039", color: "#ffffff", type: "operator" },
    { text: "1", background: "#484242", color: "#ffffff", type: "number" },
    { text: "2", background: "#484242", color: "#ffffff", type: "number" },
    { text: "3", background: "#484242", color: "#ffffff", type: "number" },
    { text: "+", background: "#FFB039", color: "#ffffff", type: "operator" },
    { text: "0", background: "#484242", color: "#ffffff", type: "number" },
    { text: ".", background: "#484242", color: "#ffffff", type: "number" },
    { text: "=", background: "#FFB039", color: "#ffffff", type: "operator" }
  ]
};

export default function CalculatorContainer() {
  const [state, setState] = useState(STATE);
  const prevNumRef = useRef(0);
  const shouldSetNum = useRef(false);

  /** prev넘길때는 이전값이기 때문에 setState((prev) => {prev}) */
  const onAddToInput = (number, type) => {
    if (type === "number") {
      setState((prev) => {
        const inputValue = shouldSetNum.current
          ? number
          : String(prev.inputValue) + number;
        shouldSetNum.current = false;
        return {
          ...state,
          inputValue
        };
      });
    }
  };

  const onAddOperator = (oper, type) => {
    if (type === "operator") {
      switch (oper) {
        case "+":
          prevNumRef.current =
            Number(prevNumRef.current) + Number(state.inputValue);
          shouldSetNum.current = true;
          setState({ ...state, inputValue: prevNumRef.current });
          break;
        case "-":
          prevNumRef.current =
            prevNumRef.current === 0
              ? Number(state.inputValue)
              : Number(prevNumRef.current) - Number(state.inputValue);
          shouldSetNum.current = true;
          setState({ ...state, inputValue: prevNumRef.current });
          break;
        case "÷":
          prevNumRef.current =
            prevNumRef.current === 0
              ? Number(state.inputValue)
              : Number(prevNumRef.current) / Number(state.inputValue);
          shouldSetNum.current = true;
          setState({ ...state, inputValue: prevNumRef.current });
          break;
        case "x":
          break;
        case "=":
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <CalculatorWrap>
        <Input state={state} />
        <Button
          state={state}
          onAddToInput={onAddToInput}
          onAddOperator={onAddOperator}
        />
      </CalculatorWrap>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #111111;
`;

const CalculatorWrap = styled.div`
  max-width: 290px;
  background: #111111;
  box-sizing: border-box;
  padding: 20px 0;
`;
