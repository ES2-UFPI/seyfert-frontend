import React from 'react'
import styles from './styles.module.css'

type LayoutProps = {
  title?: string
  titleHeader: string
  backPage?: string
  children: React.ReactNode
}

export default function Layout({titleHeader, title, children}: LayoutProps) {
  return (
    <>
      <title>{title != undefined ? title : "Página"}</title>
      <div className={styles.grid}>
        <div className={styles.header}>{titleHeader}</div>
        <div className={styles.content}>{children}</div>
        <div className={styles.siderigth}>Aqui tem um siderigth</div>
      </div>
    </>
  )
}