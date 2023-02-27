import React from 'react'
import styles from './style.module.scss'
import { Sort, Item } from '../../Components';

function Catalog(events) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.filter}>

      </div>
      <div className={styles.container}>
        <div className={styles.criteria}>
          <div className={styles.search}>
            <input type="text" placeholder='Искать в каталоге' className={styles.input}/>
          </div>
          <div className={styles.sort}>
            <div className={styles.sortTitle}>Сортировать по:</div>
            <Sort title='Цене'/>
            <Sort title='Наличию'/>
            <Sort title='Популярности'/>
          </div>
        </div>
        <div className={styles.list}>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  )
}
    
export default Catalog;
