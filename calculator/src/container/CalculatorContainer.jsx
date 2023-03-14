import React, { useState, useRef } from "react";
import styled from '@emotion/styled'

import Input from "../components/Input";
import Button from '../components/Button';
import Calculator from './../components/Cacluator/index';
import { useSelector } from "react-redux";

export default function CalculatorContainer() {
  // const [state, setState] = useState(STATE);
  // const prevButton = useRef('');
  // const shouldSetNumber = useRef(false);
  // const prevOperator = useRef("");

  // const onAddToButton = (value, type) => {
  //   if(type === "number"){
  //     setState((prev) => {
  //       // 앞에 0을 제거하기 위해 .replace(/(^0+)/, "") 사용
  //       // const inputValue = shouldSetNumber.current ? Number(value) : prev.inputValue.replace(/(^0+)/, "") + value;
  //       const inputValue = shouldSetNumber.current ? Number(value) : prev.inputValue.slice(0, -1) + value;
  //       console.log(inputValue, 'shouldSetNumber',shouldSetNumber);
  //       return { ...state, inputValue };
  //     })
  //   }
  
  //   if(type === "operator") {
  //     switch(value){
  //       case "+":
  //         // prevButton.current가 0일경우 Number(state.inputValue) 누른값 아닐경우 이전버튼 + 누른값 출력
  //         prevButton.current = prevButton.current === 0 ? 
  //           Number(state.inputValue) : 
  //           Number(prevButton.current) + Number(state.inputValue);
  //           shouldSetNumber.current = true;
  //           setState({ ...state, inputValue: prevButton.current });
  //       break;
  //       case "-":
  //         prevButton.current = prevButton.current === 0 ? 
  //         Number(state.inputValue) : 
  //         Number(prevButton.current) - Number(state.inputValue);
  //         shouldSetNumber.current = true;
  //         setState({ ...state, inputValue: prevButton.current });
  //       break;
  //       case "x":
  //         prevButton.current = prevButton.current === 0 ? 
  //         Number(state.inputValue) : 
  //         Number(prevButton.current) * Number(state.inputValue);
  //         shouldSetNumber.current = true;
  //         setState({ ...state, inputValue: prevButton.current });
  //       break;
  //       case "÷":
  //         prevButton.current = prevButton.current === 0 ? 
  //         Number(state.inputValue) : 
  //         Number(prevButton.current) / Number(state.inputValue);
  //         shouldSetNumber.current = true;
  //         setState({ ...state, inputValue: prevButton.current });
  //       break;
  //       case "=": 
  //        // useRef를 사용해서 prevOperator.current에 opreatopr값을 넣어준다
  //       let totalValue;
  //       if (prevOperator.current === "+"){
  //         totalValue = Number(prevButton.current) + Number(state.inputValue);
  //       } else if(prevOperator.current === "-"){
  //         totalValue = Number(prevButton.current) - Number(state.inputValue);
  //       } else if(prevOperator.current === "x"){
  //         totalValue = Number(prevButton.current) * Number(state.inputValue);
  //       } else if (prevOperator.current === "÷"){
  //         totalValue = Number(prevButton.current) / Number(state.inputValue);
  //       }
  //       setState({ ...state, inputValue: totalValue });
  //       shouldSetNumber.current = true;
  //       default:
  //       break;
  //     }
  //     prevOperator.current = value;
  //   }
  // }
  const calculator = useSelector(state => state.calculator);

  return (
    // <Container>
    //   <CalculatorWrap>
    //     <Input state={state} />
    //     <Button
    //       state={state}
    //       onAddToButton={onAddToButton}
    //     />
    //   </CalculatorWrap>
    // </Container>
    <Calculator calculator={calculator} />
  );
}