import React from 'react'
import styles from './styles.module.css'

type ButtonActionProps = {
  type: string
  children: React.ReactNode
}


export default function ButtonAction({type, children}: ButtonActionProps) {
    type = (type != 'green' && type != 'red') ? 'green' : type;
    return (
        <div className={styles.container}>
            <button className={type == "green" ? styles.green : styles.red}>{children}</button>
        </div>
    );
}