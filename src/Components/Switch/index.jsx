import React, {useState} from 'react';
import styles from './style.module.scss';
import { NavLink } from 'react-router-dom';

function Switch() {
    const [togglePosition, setTogglePosition] = useState('left')
    console.log(togglePosition)

    const routes = {
        main: '/give-a-tree/dist/',
        catalog: '/give-a-tree/dist/catalog',
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.navList}>
                <NavLink
                    onClick={() => setTogglePosition('left')}
                    to={routes.main}
                    className={({isActive}) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}
                >
                    <div className={styles.textItem}>Главная</div>
                </NavLink>
                <NavLink
                    onClick={() => setTogglePosition('right')}
                    to={routes.catalog} 
                    className={({isActive}) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}
                >
                    <div className={styles.textItem}>Каталог</div>
                </NavLink>
            </div>
            <div className={[styles.toggle, styles[togglePosition]].join(' ')}></div>
        </div>
    )
}

export default Switch;
