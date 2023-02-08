import React from 'react';
import styles from './style.module.scss';
import {Svg} from '../../Components'
import variables from '../../main.scss'



function Main(events) {


  return (
    <div className={styles.wrapper}>
        <section className={styles.section}>
          <div className={styles.treeBackground}>
            <Svg icon="tree" height="140" units="vh" stroke={variables.sixthColor} strokeWidth="20"/>
          </div>
          <div className={styles.container}>
            <div className={styles.description}>
              <h1 className={styles.title}>Подари дерево</h1>
              <p className={styles.descriptionText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, laboriosam. Nostrum vitae sapiente veritatis, fugit velit tempore et excepturi error odit fuga delectus, repudiandae veniam, at blanditiis iste deleniti libero!</p>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.container}>Main-page-2</div>
        </section>
        <section className={styles.section}>
          <div className={styles.container}>Main-page-3</div>
        </section>
    </div>
  )
}

export default Main;
