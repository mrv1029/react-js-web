import React from 'react';
import className from 'classnames/bind';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import images from '~/assets/images';
import styles from './SlideShow.module.scss';

const cx = className.bind(styles);
function SlideShow() {
    return (
        <Carousel interval={1000}>
            {images.SlideShow.map((img, index) => {
                return (
                    <Carousel.Item key={index}>
                        <div className={cx('carousel-item-div')} style={{ backgroundImage: `url(${img}` }}></div>
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
}

export default SlideShow;
