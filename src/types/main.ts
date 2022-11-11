import React from "react";

export interface IChildren{
    children?:React.ReactNode;
}

export  interface IStyle{
    sx?: React.CSSProperties;
}

export type Variant = "primary" | "dark" | "secondary";

export enum BtnTypes{
    FX,
    OPERATOR,
    NUMERIC
}

export interface IButton extends IChildren, IStyle{
    variant?:Variant;
    onClick:(value:string,type:BtnTypes)=>void;
    value:string;
    type:BtnTypes;
}