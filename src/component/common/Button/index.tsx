import React, {FC} from 'react';
import {IButton, IChildren, IStyle, Variant} from "../../../types/main";
import styles from './button.module.css';
import classNames from "classnames";


const Button: FC<IButton> = ({children,variant,sx, onClick,value,type}) => {
    const handleButtonClick = () => {
        onClick(value, type);
    }
    return (
        <div onClick={handleButtonClick}
             style={sx}
            className={classNames(styles.button,variant?styles[variant]:styles.primary)}>
            {value}
        </div>
    );
};

export default Button;