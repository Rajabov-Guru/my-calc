import React from "react";

export interface IChildren{
    children?:React.ReactNode;
}

export  interface IStyle{
    sx?: React.CSSProperties;
}

export type Variant = "primary" | "dark" | "secondary";