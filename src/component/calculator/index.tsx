import React, {useState} from 'react';
import Screen from "./Screen";
import styles from './calc.module.css';
import {BtnTypes} from "../../types/main";
import Keyboard from "./Keyboard";
import {operate} from "../../helpers/helper";


const Calculator = () => {
    const [accValue, setAccValue] = useState<number | null>(null);
    const [screenValue, setScreenValue] = useState<string>("0");
    const [topScreenValue, setTopScreenValue] = useState<string>("0");
    const [currentOperator, setCurrentOperator] = useState<string | null>(null);
    const [expectsOperand, setExpectsOperand] = useState<boolean>(false);



    const handleClickNumericKey = (value:number) => {
        if (expectsOperand) {
            setScreenValue(String(value));
            setExpectsOperand(false);
        }
        else
            setScreenValue(screenValue === "0" ? String(value) : screenValue + value);
    }

    const addDecimalPoint = () => {
        if (expectsOperand) {
            setScreenValue("0.");
        }
        else {
            if (!screenValue.includes("."))
                setScreenValue(screenValue + ".");
        }
        setExpectsOperand(false);
    }

    const handleClickOperator = (operator:string) => {
        const inputValue = parseFloat(screenValue);
        if (accValue === null) {
            setAccValue(inputValue);
            setTopScreenValue(`${inputValue} ${operator}`)
        }
        else {
            if (currentOperator) {
                const resultValue = operate(currentOperator, accValue, inputValue);
                if(resultValue) setAccValue(resultValue);
                if(resultValue==Infinity) {
                    setScreenValue('Ошибка!');
                }else setScreenValue(String(resultValue));

                if(currentOperator!=='=') setTopScreenValue(`${topScreenValue} ${inputValue} =`);
                else setTopScreenValue(`${inputValue} ${operator}`);
            }
        }
        setExpectsOperand(true);
        setCurrentOperator(operator);
    }

    const handleClickFunctionKey = (value:string) => {
        switch (value) {
            case "C": allClear(); break;
            case ".": addDecimalPoint(); break;
        };
    }

    const handleActionToPerform = (value:string, keyType:BtnTypes) => {
        switch (keyType) {
            case BtnTypes.FX: handleClickFunctionKey(value); break;
            case BtnTypes.NUMERIC: handleClickNumericKey(+value); break;
            case BtnTypes.OPERATOR: handleClickOperator(value); break;
        }
    }

    const allClear = () => {
        setAccValue(null);
        setScreenValue("0");
        setCurrentOperator(null);
        setExpectsOperand(false);
        setTopScreenValue('0');
    }


    return (
        <div className={styles.wrapper}>
            <Screen
                output={topScreenValue}
                result={screenValue}
            />
            <Keyboard actionToPerform={handleActionToPerform}/>
        </div>
    );
};

export default Calculator;