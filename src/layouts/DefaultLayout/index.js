import className from 'classnames/bind';

import Header from '~/layouts/components/Header';
import SlideShow from '../components/SlideShow';
import styles from './DefaultLayout.module.scss';

const cx = className.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('slide-show')}>
                <SlideShow />
            </div>
            <div className={cx('container')}>
                <div>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
