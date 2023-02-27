import className from 'classnames/bind';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import styles from './Product.module.scss';
import Item from './component/Item';

const cx = className.bind(styles);
const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
};
console.log('re-render Product');
function Product({ productId }) {
    return (
        <div className={cx('wapper')}>
            <div className={cx('content')}>
                <div className={cx('product-img')}>Img</div>
                <div className={cx('product-title')}>
                    <Slider {...settings}>
                        <div className={cx('slick-track')}>
                            <Item productId={productId} />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Product;
