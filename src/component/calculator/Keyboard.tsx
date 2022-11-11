import React, {FC} from 'react';
import {BtnTypes, IButton} from "../../types/main";
import styles from "./calc.module.css";
import Button from "../common/Button";

const keyboardData = [
    {value:'C', type:BtnTypes.FX, sx:{gridColumn:'1/4'},variant:'secondary'},
    {value:'÷', type:BtnTypes.OPERATOR},
    {value:'7', type:BtnTypes.NUMERIC,variant:'dark'},
    {value:'8', type:BtnTypes.NUMERIC,variant:'dark'},
    {value:'9', type:BtnTypes.NUMERIC,variant:'dark'},
    {value:'×', type:BtnTypes.OPERATOR,},
    {value:'4', type:BtnTypes.NUMERIC,variant:'dark'},
    {value:'5', type:BtnTypes.NUMERIC,variant:'dark'},
    {value:'6', type:BtnTypes.NUMERIC,variant:'dark'},
    {value:'-', type:BtnTypes.OPERATOR,},
    {value:'1', type:BtnTypes.NUMERIC,variant:'dark'},
    {value:'2', type:BtnTypes.NUMERIC,variant:'dark'},
    {value:'3', type:BtnTypes.NUMERIC,variant:'dark'},
    {value:'+', type:BtnTypes.OPERATOR,},
    {value:'0', type:BtnTypes.NUMERIC,sx:{gridColumn:'1/3', variant:'dark'}},
    {value:'.', type:BtnTypes.FX,},
    {value:'=', type:BtnTypes.OPERATOR,},

];

interface KeyboardProps{
    actionToPerform:(value:string, type:BtnTypes)=>void;
}
const Keyboard:FC<KeyboardProps> = ({actionToPerform}) => {

    const handleClickButton = (value:string, keyType:BtnTypes) => {
        actionToPerform(value, keyType);
    }
    return (
        <div className={styles.keyboard}>
            {keyboardData.map(item=>
                <Button key={item.value} {...item as IButton} onClick={handleClickButton}/>
            )}
        </div>
    );
};

export default Keyboard;