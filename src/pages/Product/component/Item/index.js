import className from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './Item.module.scss';
import { ProductHot, ProductSport, ProductNormal } from '~/mock/ProductData.js';
const cx = className.bind(styles);
function Item({ productId }) {
    console.log('re-render');
    const [product, setProduct] = useState(() => {
        console.log('re-render State');
        return ProductHot;
    });

    const GetData = (productId) => {
        if (productId === 'Hot') return ProductHot;
        if (productId === 'Sport') return ProductSport;
        return ProductNormal;
    };

    useEffect(() => {
        setProduct(GetData(productId));

        console.log('re-render Eff');
    }, [productId]);

    return (
        <div className={cx('wapper')}>
            {console.log(productId)}
            {console.log('re-render UI')}

            {product.map((item, index) => {
                return (
                    <div key={index}>
                        <div>
                            <h3>{item.Name}</h3>
                        </div>
                        <div>
                            <h3>{item.Url}</h3>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Item;
