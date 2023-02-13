import classNames from 'classnames/bind';
import styles from './Popup.module.scss';

const cx = classNames.bind(styles);
function Popup({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}
export default Popup;
