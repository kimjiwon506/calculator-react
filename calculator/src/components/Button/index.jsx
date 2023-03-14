import React from 'react';
import * as Styled from './styled';

export default function Button({calculator}) {
    return (
      <>
      {calculator.buttonArray.map((item, index) => (
          <Styled._Button
            value={item.text}
            key={index}
            type="button"
            background={item.background}
            color={item.color}
          >
            <div>{item.text}</div>
          </Styled._Button>
        ))}
      </>
    );
}