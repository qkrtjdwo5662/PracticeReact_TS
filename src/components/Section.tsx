import React from 'react'
import styles from '../styles/Section.module.css'

export default function Section() {
  return (
    <div className={styles.box}>
      <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Ipsa fuga laboriosam et vitae labore nam a id exercitationem,
      eius iste culpa quis pariatur, inventore eligendi animi porro aliquam odit impedit.  
      </p>
      <button className={styles.btn}>버튼</button>
    </div>
  )
}
