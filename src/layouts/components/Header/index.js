import className from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faEarthAsia, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import images from '~/assets/images';
import Menu from '../Menu';
import Action from '../Action';
import config from '~/configs';

const cx = className.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="test" />
                </Link>
                <div className="menu">
                    <Menu />
                </div>
                <div className="action">
                    <Action />
                </div>
            </div>
        </header>
    );
}

export default Header;
