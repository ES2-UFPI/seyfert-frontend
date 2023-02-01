import React from 'react'
import styles from './styles.module.css'

type TypeLabel = "CLEAN" | "AREA"

type LabelProps = {
  title: string
  type: TypeLabel
  children: React.ReactNode
}

export default function Label({title, type, children}: LabelProps) {
  if(type === "CLEAN"){
    return (
      <div className={styles.container_clean}>
          <span className={styles.title}>{title}</span>
          <div className={styles.content_container_clean}>
              <p className={styles.content}>{children}</p>
          </div>
      </div>
    )
  }else {
    return (
      <div className={styles.container_area}>
          <span className={styles.title}>{title}</span>
          <div className={styles.content_container_area}>
              <p className={styles.content}>{children}</p>
          </div>
      </div>
    )
  }
}