import React from 'react'
import styles from './styles.module.css'

type TypeLabel = "CLEAN" | "AREA"

type LabelProps = {
  title: string
  children: React.ReactNode
}

export default function Label({title, children}: LabelProps) {
  return (
    <div className={styles.container}>
        <span className={styles.title}>{title}</span>
        <div className={styles.content_container}>
            <p className={styles.content}>{children}</p>
        </div>
    </div>
  )
}