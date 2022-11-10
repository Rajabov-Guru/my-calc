import React from 'react';
import styles from './output.module.css'

const OutputView = () => {
    return (
        <div  className={styles.output}>
            <div className={styles.all_input}>80/8=</div>
            <div className={styles.current_input}>10</div>
        </div>
    );
};

export default OutputView;