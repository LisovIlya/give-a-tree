import React from 'react';
import styles from './style.module.scss';
import {Switch, NavIcon} from '../../Components'

function Header() {

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.logo}>Gardener</div>
                <Switch />
                <div className={styles.navigation}>
                    <NavIcon type='home' />
                    <NavIcon type='search' />
                    <NavIcon type='like' />
                    <NavIcon type='basket' />
                    <NavIcon type='user' />
                </div>
            </div>
        </div>
    )
}

export default Header;
