import React from 'react';
import * as Styled from './styled';

export default function Button({calculator, onAddNumber, prevButton}) {
    //const adder = x => y => x + y;
    const onClick = number => {
      prevButton.current = number;
      onAddNumber(prevButton.current)
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
            onClick={() => onClick(item.text)}
          >
            <div>{item.text}</div>
          </Styled._Button>
        ))}
      </>
    );
}