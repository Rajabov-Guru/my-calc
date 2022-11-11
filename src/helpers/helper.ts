import {Operations} from "../types/main";

export function calculate(operation:Operations,value1:number, value2:number){
    switch (operation){
        case Operations.ADD:
            return  add(value1,value2).toString();
        case Operations.SUBTRACT:
            return subtract(value1,value2).toString();
        case Operations.MULTIPLY:
            return multiply(value1,value2).toString();
        case Operations.DIVISION:
            return division(value1,value2).toString();
        default:
            return '0';
    }
}

export function add(a:number,b:number){
    return a+b;
}

export function subtract(a:number,b:number){
    return a-b;
}

export function multiply(a:number,b:number){
    return a*b;
}

export function division(a:number,b:number){
    return a/b;
}