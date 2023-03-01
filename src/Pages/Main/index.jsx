import React from 'react';
import styles from './style.module.scss';
import {Svg} from '../../Components'
import variables from '../../main.scss'



function Main(events) {


  return (
    <div className={styles.wrapper}>
        <section className={styles.section}>
          <div className={styles.treeBackground}>
            <Svg icon="tree" height="140" units="vh" stroke={variables.grey} strokeWidth="20"/>
          </div>
          <div className={styles.container}>
            <div className={styles.description}>
              <h1 className={styles.title}>Интернет - магазин</h1>
              <h2 className={styles.title2}>РАСТЕНИЙ</h2>
              <p className={styles.descriptionText}>Гарантируем наличие выбранных растений и их доставку</p>
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
