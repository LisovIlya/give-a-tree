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
              <h1 className={styles.title}>Подари дерево</h1>
              <p className={styles.descriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
