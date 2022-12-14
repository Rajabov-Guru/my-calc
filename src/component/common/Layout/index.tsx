import React, {FC} from 'react';
import styles from './layout.module.css';
import {IChildren} from "../../../types/main";

const Layout:FC<IChildren> = ({children}) => {
    return (
        <div className={styles.layout}>
            {children}
        </div>
    );
};

export default Layout;