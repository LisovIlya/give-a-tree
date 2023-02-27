import React, {useState, useEffect} from 'react';
import styles from './style.module.scss';
import { NavLink } from 'react-router-dom';

function Switch(events) {

    const [togglePosition, setTogglePosition] = useState('left')

    const publicURL = process.env.PUBLIC_URL

    useEffect(() => {
        const currentURL = window.location.pathname
        const publicURL = process.env.PUBLIC_URL
        if(currentURL === `${publicURL}/`) {
            setTogglePosition('left')
        }
        if(currentURL === `${publicURL}/catalog`) {
            setTogglePosition('right')
        }
    }, [])


    return (
        <div className={styles.wrapper}>
            <div className={styles.navList}>
                <NavLink
                    onClick={() => setTogglePosition('left')}
                    to={`${publicURL}/`}
                    className={({isActive}) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}
                >
                    <div className={styles.textItem}>Главная</div>
                </NavLink>
                <NavLink
                    onClick={() => setTogglePosition('right')}
                    to={`${publicURL}/catalog`} 
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
