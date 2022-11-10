import React, {FC} from 'react';
import styles from './wrapper.module.css';
import {IChildren} from "../../../types/main";

const CalculatorWrapper:FC<IChildren> = ({children}) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    );
};

export default CalculatorWrapper;