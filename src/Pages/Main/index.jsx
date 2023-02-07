import React from 'react';
import styles from './style.module.scss';
import TreeBackground from '../../images/TreeBackground.svg'



function Main(events) {
  return (
    <div className={styles.wrapper}>
        <section className={styles.section}>
          <img src={TreeBackground} alt="tree" className={styles.treeBackground} />
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
