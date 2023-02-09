import className from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import images from '~/assets/images';
import Menu from '../Menu';
import Action from '../Action';
import config from '~/configs';
import Search from '~/layouts/components/SearchInput/SearchInput';

const cx = className.bind(styles);

function Header({ children }) {
    const [searchClick, setsearchClick] = useState(false);
    const handleSearchClick = (e) => {
        setsearchClick(!searchClick);
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className="logo">
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="test" />
                    </Link>
                </div>
                {!searchClick ? <Menu /> : <Search />}
                {children}
                <div className="action">
                    <Action onSearchClick={handleSearchClick} />
                </div>
            </div>
        </header>
    );
}

export default Header;
