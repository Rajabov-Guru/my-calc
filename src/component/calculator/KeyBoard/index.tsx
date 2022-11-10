import React from 'react'
import styles from './keyboard.module.css';
import Button from "../../common/Button";

const Keyboard = () => {
    return (
        <div className={styles.keyboard}>
            <Button sx={{gridColumn:'1/4'}} variant={'secondary'}>C</Button>
            <Button>÷</Button>
            <Button variant={'dark'}>7</Button>
            <Button variant={'dark'}>8</Button>
            <Button variant={'dark'}>9</Button>
            <Button>×</Button>
            <Button variant={'dark'}>4</Button>
            <Button variant={'dark'}>5</Button>
            <Button variant={'dark'}>6</Button>
            <Button>-</Button>
            <Button variant={'dark'}>1</Button>
            <Button variant={'dark'}>2</Button>
            <Button variant={'dark'}>3</Button>
            <Button>+</Button>
            <Button sx={{gridColumn:'1/3'}} variant={'dark'}>0</Button>
            <Button variant={'dark'}>.</Button>
            <Button>=</Button>
        </div>
    );
};

export default Keyboard;