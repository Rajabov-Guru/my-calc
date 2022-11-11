import React, {useContext, useEffect, useState} from 'react';
import CalculatorWrapper from "./CalculatorWrapper";
import OutputView from "./OutputView";
import Keyboard from "./KeyBoard";
import {Context} from "../../context/context";
import {ClickTypes, Operations} from "../../types/main";
import {calculate} from "../../helpers/helper";

const Calculator = () => {
    const {newInput, setNewInput} = useContext(Context);

    const [operation, setOperation] = useState<Operations | null>(null);
    const [firstOperand, setFirstOperand] = useState<number | null>(null);

    const [output, setOutput] = useState<string>('0');
    const [result, setResult] = useState<string>('');


    useEffect(()=>{
        if(newInput.type == ClickTypes.OPERATION){
            handleOperations(newInput.value);
        }
        else handleValues(newInput.value);
    },[newInput]);


    useEffect(()=>{
        if(operation){
            setOutput(`${firstOperand}${operation}`)
        }
    },[operation])

    const handleOperations = (value:string)=>{
        switch (value) {
            case Operations.CLEAR:
                clear();
                break;
            case Operations.EQUAL:
                if(firstOperand!==null && operation) {
                    let res = calculate(operation,firstOperand,+result);
                    setResult(res);
                    setFirstOperand(+res);
                    setOutput(`${firstOperand} ${operation} ${+result} = `);
                    setOperation(null);
                }
                break;
            default:
                if(!firstOperand) setFirstOperand(+result);
                else if (operation) {
                    let res = '';
                    res = calculate(operation,firstOperand,+result);
                    setFirstOperand(+res);
                    setOutput(`${+res} ${operation}`);
                }
                setOperation(newInput.value as Operations);
                setResult('0');
        }
    }

    const handleValues = (value:string)=>{
        if(value.length+result.length<=16){
            if(result==='0' && value!=='.') setResult(newInput.value);
            else setResult(result+newInput.value);
        }
    }

    const clear = ()=>{
        setNewInput({type:ClickTypes.VALUE, value:'0'});
        setOutput('0');
        setResult('');
        setFirstOperand(null);
        setOperation(null);
    }


    return (
        <CalculatorWrapper>
            <OutputView
                output={output}
                result={result}
            />
            <Keyboard/>
        </CalculatorWrapper>
    );
};

export default Calculator;