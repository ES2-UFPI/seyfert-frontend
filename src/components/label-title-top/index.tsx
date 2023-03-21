import React from 'react'
import styles from './styles.module.css'

type LabelProps = {
  title: string
  children: React.ReactNode
}

export default function LabelTitleTop({title, children}: LabelProps) {
  return (
    <div className={styles.container}>
        <span className={styles.title}>{title}</span>
        <span className={styles.content}>{children}</span>
    </div>
  )
}