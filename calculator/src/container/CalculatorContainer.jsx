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
  inputValue: "0",
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
  const prevButton = useRef(0);
  const shouldSetNumber = useRef(false);
  const prevOperator = useRef("");

  //value -> state의 buttonArray -> text
  const onAddToButton = (value, type) => {
    // input에 number가 화면에 나오도록
    if(type === "number") {
      setState((prev) => {
        // prev넘길때는 이전값이기 때문에 setState((prev) => {prev}
        // inputValue => 0 + 누른값
        const inputValue = shouldSetNumber.current ? Number(value) : Number(prev.inputValue) + Number(value);
        // console.log('shouldSetNumber:', shouldSetNumber.current , 
        // 'state.inputValue:',state.inputValue, 
        // 'Number(prev.inputValue):', Number(prev.inputValue),
        // 'Number(value):',Number(value)
        // )
        return { ...state, inputValue };
      })
    }
    // *버튼을 눌렀을때 이전값이 나와야 하므로 useRef를 사용해서 이전 값을 저장해준다.
    // 화면이 초기화, 그다음의 숫자만 화면에 나와야 하므로 useRef를 사용해서 화면을 초기화한다. shouldSetNumver
    if(type === "operator") {
      switch(value){
        case "+":
          // prevButton.current가 0일경우 Number(state.inputValue) 누른값 아닐경우 이전버튼 + 누른값 출력
          prevButton.current = prevButton.current === 0 ? 
            Number(state.inputValue) : 
            Number(prevButton.current) + Number(state.inputValue);
            shouldSetNumber.current = true;
            setState({ ...state, inputValue: prevButton.current });
        break;
        case "-":
          prevButton.current = prevButton.current === 0 ? 
          Number(state.inputValue) : 
          Number(prevButton.current) - Number(state.inputValue);
          shouldSetNumber.current = true;
          setState({ ...state, inputValue: prevButton.current });
        break;
        case "x":
          prevButton.current = prevButton.current === 0 ? 
          Number(state.inputValue) : 
          Number(prevButton.current) * Number(state.inputValue);
          shouldSetNumber.current = true;
          setState({ ...state, inputValue: prevButton.current });
        break;
        case "÷":
          prevButton.current = prevButton.current === 0 ? 
          Number(state.inputValue) : 
          Number(prevButton.current) / Number(state.inputValue);
          shouldSetNumber.current = true;
          setState({ ...state, inputValue: prevButton.current });
        break;
        case "=": 
         // useRef를 사용해서 prevOperator.current에 opreatopr값을 넣어준다
        let totalValue;
        if (prevOperator.current === "+"){
          totalValue = Number(prevButton.current) + Number(state.inputValue);
        } else if(prevOperator.current === "-"){
          totalValue = Number(prevButton.current) - Number(state.inputValue);
        } else if(prevOperator.current === "x"){
          totalValue = Number(prevButton.current) * Number(state.inputValue);
        } else if (prevOperator.current === "÷"){
          totalValue = Number(prevButton.current) / Number(state.inputValue);
        }
        setState({ ...state, inputValue: totalValue });
        shouldSetNumber.current = true;
        default:
        break;
      }
      prevOperator.current = value;
      console.log("prevOperator.current:",prevOperator.current);
    }

  }


  return (
    <Container>
      <CalculatorWrap>
        <Input state={state} />
        <Button
          state={state}
          onAddToButton={onAddToButton}
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
