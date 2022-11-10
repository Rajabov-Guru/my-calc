import React from 'react';
import CalculatorWrapper from "./CalculatorWrapper";
import OutputView from "./OutputView";
import Keyboard from "./KeyBoard";

const Calculator = () => {
    return (
        <CalculatorWrapper>
            <OutputView/>
            <Keyboard/>
        </CalculatorWrapper>
    );
};

export default Calculator;