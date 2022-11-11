import {IButton} from "./common";

export enum Operations{
    ADD='+',
    SUBTRACT='-',
    MULTIPLY='×',
    DIVISION='÷',
    EQUAL='=',
    CLEAR='C'
}
export enum ClickTypes{
    OPERATION,
    VALUE
}


export interface KeyboardClick{
    type:ClickTypes;
    value:Operations | string;
}

export interface IKeyboardButton extends IButton{
    response:KeyboardClick;
}