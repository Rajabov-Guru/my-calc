import React, {FC} from 'react';
import {IButton, IChildren, IStyle, Variant} from "../../../types/common";
import styles from './button.module.css';
import classNames from "classnames";


const Button: FC<IButton> = ({children,variant,sx, onClick}) => {
    return (
        <div onClick={onClick}
             style={sx}
            className={classNames(styles.button,variant?styles[variant]:styles.primary)}>
            {children}
        </div>
    );
};

export default Button;