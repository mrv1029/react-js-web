import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import className from 'classnames/bind';

import styles from './Product.module.scss';

const cx = className.bind(styles);

function Product({ productId }) {
    return <h2 style={{ height: '1000px' }}>Product Page: {productId}</h2>;
}

export default Product;
