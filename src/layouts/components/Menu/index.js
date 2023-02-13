import className from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';

import styles from './Menu.module.scss';
import { publicRoutes } from '~/routes';
import config from '~/configs';

const cx = className.bind(styles);

function Menu() {
    return (
        <div className="nav-menu">
            <ul className={cx('nav')}>
                {config.menu.map((item) => {
                    const route = config.routes[item];
                    return (
                        <li className={cx('nav-item')} key={item}>
                            <Link to={route} className={cx('menu-link')} key={item}>
                                {item}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Menu;
