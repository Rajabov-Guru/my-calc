import React, {FC} from 'react';
import styles from './output.module.css';

interface OutputProps{
    output:string;
    result:string;
}

const OutputView:FC<OutputProps> = ({output, result}) => {
    return (
        <div  className={styles.output}>
            <div className={styles.all_input}>{output}</div>
            <div className={styles.current_input}>{result}</div>
        </div>
    );
};

export default OutputView;