import React from "react";
import * as Styled from './styled';

function Input({calculator}) {
    return (
        <div>
            <Styled._Input type="text" value={calculator.inputValue || ""} readOnly />  
        </div>
    );
}

export default Input;