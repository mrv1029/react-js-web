import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faEarthAsia, faKeyboard } from '@fortawesome/free-solid-svg-icons';

import { SearchIcon, ProfileIcon, CartIcon } from '~/components/Icons';

import styles from './Action.module.scss';

const cx = className.bind(styles);

function Action() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search')}>
                <button className={cx('search-btn')}>
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
