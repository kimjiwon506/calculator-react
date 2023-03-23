import React, {useRef, useState} from "react";

import Calculator from './../components/Cacluator/index';
import { useDispatch, useSelector } from "react-redux";
import { onAdd, onChangeInput } from './../modules/calculator';

export default function CalculatorContainer() {
  const prevValueRef = useRef(null);
  const nextValueRef = useRef(null);
  const shouldSetNumber = useRef(false);
  const calculator = useSelector(state => state.calculator);
  const dispatch = useDispatch();
  const onChangeInputText = text => dispatch(onChangeInput(text));
  const onAddNumber = text => dispatch(onAdd(text))

  return (
    <Calculator calculator={calculator} onChangeInputText={onChangeInputText} onAddNumber={onAddNumber} prevValueRef={prevValueRef} nextValueRef={nextValueRef} shouldSetNumber={shouldSetNumber} />
  );
}