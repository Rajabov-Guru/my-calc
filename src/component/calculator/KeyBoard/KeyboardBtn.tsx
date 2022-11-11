import React, {FC, useContext} from 'react';
import {IKeyboardButton} from "../../../types/main";
import Button from "../../common/Button";
import {Context} from "../../../context/context";

const KeyboardBtn:FC<IKeyboardButton> = ({ sx,variant,response}) => {
    const {newInput, setNewInput} = useContext(Context);

    const clickHandler =(e:React.MouseEvent)=>{
        setNewInput(response);
    }

    return (
        <Button onClick={clickHandler} sx={sx} variant={variant}>{response.value}</Button>
    );
};

export default KeyboardBtn;