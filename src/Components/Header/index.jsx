import React from 'react';
import styles from './style.module.scss';
import {Switch, NavIcon} from '../../Components'

function Header() {

    const navigation = {
        user: 'user',
        basket: 'basket'
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.logo}>Give a tree</div>
                <Switch />
                <div className={styles.navigation}>
                    <NavIcon type={navigation.user} />
                    <NavIcon type={navigation.basket} />
                </div>
            </div>
        </div>
    )
}

export default Header;
