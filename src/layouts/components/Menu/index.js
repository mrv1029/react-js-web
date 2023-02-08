import className from 'classnames/bind';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';
import Home from '~/pages/Home/Home';
import config from '~/configs';

const cx = className.bind(styles);

function Menu() {
    return (
        <div>
            <ul className={cx('nav')}>
                {Object.keys(config.routes).map((key, index) => {
                    return (
                        <li className={cx('nav-item')} key={index}>
                            <Link to={config.routes[key]} className={cx('menu-link')} key={index}>
                                {key}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Menu;
