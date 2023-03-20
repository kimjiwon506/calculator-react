import React from 'react';
import * as Styled from './styled';

import Button from './../Button/index';
import Input from './../Input/index';

function Calculator({calculator, onChangeInputText, onAddNumber, prevButton, prevValueRef, nextValueRef, shouldSetNumber}) {
    return (
        <Styled._Container> 
            <Styled._Wrap>  
                <Input calculator={calculator} />
                <Styled._ButtonWrap>
                    <Button calculator={calculator} onChangeInputText={onChangeInputText} onAddNumber={onAddNumber} prevButton={prevButton} prevValueRef={prevValueRef} nextValueRef={nextValueRef} shouldSetNumber={shouldSetNumber} />
                </Styled._ButtonWrap>
                
            </Styled._Wrap>
        </Styled._Container>
    );
}

export default Calculator;