import React from 'react'
import styles from './style.module.scss'
import { Svg, Sort, Item, Filter } from '../../Components';
import variables from '../../main.scss'

function Catalog() {

  const filters = ['price', 'class', 'variety', 'height', 'width', 'flower', 'leaf', 'soil', 'climate', 'peculiarities']

  return (
    <div className={styles.wrapper}>
      <div className={styles.filtersContainer}>
        <div className={styles.top}>
          <div className={styles.title}>Фильтр</div>
          <div className={styles.titleArrow}>
            <Svg icon="arrow" height='10' stroke={variables.graphite} strokeWidth='2'/>
          </div>
        </div>
        <div className={styles.filters}>
          {filters.map((type, index) => (<Filter key={index} type={type}/>))}
        </div>
      </div>
      <div className={styles.itemsContainer}>
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
        <div className={styles.list}>{Array(10).fill(1).map((el, i) => <Item key={i}/>)}
        </div>
      </div>
    </div>
  )
}
    
export default Catalog;
