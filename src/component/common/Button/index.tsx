import React, {FC} from 'react';
import {IChildren, IStyle, Variant} from "../../../types/main";
import styles from './button.module.css';
import classNames from "classnames";

interface ButtonProps extends IChildren, IStyle{
    variant?:Variant;
}

const Button: FC<ButtonProps> = ({children,variant,sx}) => {
    return (
        <div style={sx}
            className={classNames(styles.button,variant?styles[variant]:styles.primary)}>
            {children}
        </div>
    );
};

export default Button;