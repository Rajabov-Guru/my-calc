import React, {FC, useState} from "react";
import {ClickTypes, KeyboardClick} from "../types/main";

const useKeyboardInput = () => {
    const [newInput, setNewInput] = useState<KeyboardClick>({type:ClickTypes.VALUE, value:'0'});

    return {
        newInput,
        setNewInput
    }
}

export const Context = React.createContext({} as ReturnType<typeof useKeyboardInput>);

interface ContextProps{
    children:React.ReactNode;
}

export const ContextProvider:FC<ContextProps> = ({ children }) => {

    return (
        <Context.Provider value={useKeyboardInput()}>
            {children}
        </Context.Provider>
    );
};