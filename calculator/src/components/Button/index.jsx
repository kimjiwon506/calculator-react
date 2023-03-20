import React, { useEffect, useRef } from 'react';
import * as Styled from './styled';

export default function Button({calculator, onChangeInputText, prevValueRef, nextValueRef, onAddNumber, shouldSetNumber }) {
    
    prevValueRef.current = calculator.inputValue;
    
    const onClick = (item) => {
      if((item.type === "number")){
        nextValueRef.current = item.text;
        var currentValue = prevValueRef.current + nextValueRef.current;
        onChangeInputText(currentValue)
      }
      if(item.type === 'operator' && item.text === '+') {
        shouldSetNumber.current = true;
        console.log(calculator.inputValue + currentValue );
        // shouldSetNumber.current = true;
        // onAddNumber(currentValue + nextValueRef.current)
      }
    }

    return (
      <>
      {calculator.buttonArray.map((item, index) => (
          <Styled._Button
            value={item.text}
            key={index}
            type="button"
            background={item.background}
            color={item.color}
            onClick={() => onClick(item)}
          >
            <div>{item.text}</div>
          </Styled._Button>
        ))}
      </>
    );
}