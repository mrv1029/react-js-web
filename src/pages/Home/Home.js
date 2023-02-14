import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import className from 'classnames/bind';

import styles from './Home.module.scss';
import Product from '../Product/Product';
import { navTab } from '~/mock/NavTab.js';

const cx = className.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Tabs defaultActiveKey="home" id="fill-tab-example" className={`${cx('tab-item')} mb-3`} fill>
                    {navTab.map((item, key) => {
                        return (
                            <Tab key={key} eventKey={item.Key} title={item.Value} className={cx('tab-detail')}>
                                <Product productId={item.Key} />
                            </Tab>
                        );
                    })}
                </Tabs>
                {/* <NavTab /> */}
            </div>
        </div>
    );
}

export default Home;
