import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faEarthAsia, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { ProfileIcon, CartIcon } from '~/components/Icons';

import styles from './Action.module.scss';
import { SearchIcon } from '~/components/Icons';
import routes from '~/configs/routes';

const cx = className.bind(styles);

function Action({ onSearchClick }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search')}>
                {/* <a href={routes.search} className={cx('search-btn')}>
                    <SearchIcon />
                </a>
                {
                    <Link to={routes.search} className={cx('search-btn')}>
                        <SearchIcon />
                    </Link>
                } */}
                <button className={cx('search-btn')} onClick={onSearchClick}>
                    <SearchIcon />
                </button>
            </div>
            <div className={cx('profile')}>
                <button className={cx('profile-btn')}>
                    <ProfileIcon />
                </button>
            </div>
            <div className={cx('cart')}>
                <button className={cx('cart-btn')}>
                    <CartIcon />
                </button>
            </div>
        </div>
    );
}

export default Action;
