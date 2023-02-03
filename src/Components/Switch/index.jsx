import React from 'react';
import styles from './style.module.scss';
import { NavLink } from 'react-router-dom';

function Switch() {
    const routes = {
        main: '/give-a-tree/dist/',
        catalog: '/give-a-tree/dist/catalog',
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.navList}>
                <NavLink to={routes.main} className={({isActive}) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}>
                    <div className={styles.textItem}>Главная</div>
                </NavLink>
                <NavLink to={routes.catalog} className={({isActive}) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}>
                    <div className={styles.textItem}>Каталог</div>
                </NavLink>
                <div className={styles.toggle}></div>
            </div>
        </div>
    )
}

export default Switch;
