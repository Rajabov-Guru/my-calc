import React from 'react'
import styles from './keyboard.module.css';
import KeyboardBtn from "./KeyboardBtn";
import {ClickTypes, Operations} from "../../../types/main";

const Keyboard = () => {
    return (
        <div className={styles.keyboard}>
            <KeyboardBtn
                response={{type:ClickTypes.OPERATION, value:Operations.CLEAR}}
                sx={{gridColumn:'1/4'}}
                variant={'secondary'}/>
            <KeyboardBtn response={{type:ClickTypes.OPERATION, value:Operations.DIVISION}}/>
            <KeyboardBtn response={{type:ClickTypes.VALUE, value:'7'}} variant={'dark'}/>
            <KeyboardBtn response={{type:ClickTypes.VALUE, value:'8'}} variant={'dark'}/>
            <KeyboardBtn response={{type:ClickTypes.VALUE, value:'9'}} variant={'dark'}/>
            <KeyboardBtn response={{type:ClickTypes.OPERATION, value:Operations.MULTIPLY}}/>
            <KeyboardBtn response={{type:ClickTypes.VALUE, value:'4'}} variant={'dark'}/>
            <KeyboardBtn response={{type:ClickTypes.VALUE, value:'5'}} variant={'dark'}/>
            <KeyboardBtn response={{type:ClickTypes.VALUE, value:'6'}} variant={'dark'}/>
            <KeyboardBtn response={{type:ClickTypes.OPERATION, value:Operations.SUBTRACT}}/>
            <KeyboardBtn response={{type:ClickTypes.VALUE, value:'1'}} variant={'dark'}/>
            <KeyboardBtn response={{type:ClickTypes.VALUE, value:'2'}} variant={'dark'}/>
            <KeyboardBtn response={{type:ClickTypes.VALUE, value:'3'}} variant={'dark'}/>
            <KeyboardBtn response={{type:ClickTypes.OPERATION, value:Operations.ADD}}/>
            <KeyboardBtn
                response={{type:ClickTypes.VALUE, value:'0'}}
                sx={{gridColumn:'1/3'}}
                variant={'dark'}/>
            <KeyboardBtn response={{type:ClickTypes.VALUE, value:'.'}} variant={'dark'}/>
            <KeyboardBtn response={{type:ClickTypes.OPERATION, value:Operations.EQUAL}}/>
        </div>
    );
};

export default Keyboard;