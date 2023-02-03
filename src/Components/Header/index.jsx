import React from 'react';
import styles from './style.module.scss';
import {Switch} from '../../Components'

function Header() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.logo}>Give a tree</div>
                <Switch />
                <div className={styles.bread}></div>
            </div>
        </div>
    )
}

export default Header;
