import React from 'react';
import styles from './style.module.scss';
import {Switch, NavIcon, User} from '../../Components'

function Header() {

    const navigation = {
        basket: 'basket',
        like: 'like'
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <div className={styles.firstPartLogo}>Give a&nbsp;</div>
                    <div className={styles.lastPartLogo}>tree</div>
                </div>
                <Switch />
                <div className={styles.right}>
                    <div className={styles.navigation}>
                        <NavIcon type={navigation.like} />
                        <NavIcon type={navigation.basket} />
                    </div>
                    <User />
                </div>
            </div>
        </div>
    )
}

export default Header;
