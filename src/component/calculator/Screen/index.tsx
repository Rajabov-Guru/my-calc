import React, {FC} from 'react';
import styles from './output.module.css';

interface OutputProps{
    output:string;
    result:string;
}

const Screen:FC<OutputProps> = ({output, result}) => {
    return (
        <div  className={styles.screen}>
            <div className={styles.all_input}>{output}</div>
            <div className={styles.current_input}>{result}</div>
        </div>
    );
};

export default Screen;