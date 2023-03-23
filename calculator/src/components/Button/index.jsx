import React, { useEffect, useRef } from 'react';
import * as Styled from './styled';

export default function Button({calculator, ...props }) {
    const {onChangeInputText, onAddNumber, prevButton, prevValueRef, nextValueRef, shouldSetNumber} = props;
    
    const onClick = (item) => {
      if((item.type === "number")){
        prevValueRef.current = calculator.inputValue;
        nextValueRef.current = item.text;
        const currentValue = prevValueRef.current + nextValueRef.current;
        onChangeInputText(currentValue)
      }

      if(item.type === 'operator' && item.text === '+') {
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