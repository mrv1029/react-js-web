import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import className from 'classnames/bind';
import { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Home.css';
import styles from './Home.module.scss';
import Product from '../Product/Product';
import { navTab } from '~/mock/NavTab.js';
import HomePageSearch from '../HomePageSearch/HomePageSearch';

const cx = className.bind(styles);

function Home() {
    let tabKeyActive = useRef([]);

    //dùng func callback get giá trị để tránh bị render nhiều lần khi set state
    const [tab, setTab] = useState(() => {
        return navTab[0].Key;
    });
    const handleSelectTab = (tabKey) => {
        setTab((prev) => {
            tabKeyActive.current.splice(0);
            navTab.map((item, index) => {
                if (item.Key !== tabKey) {
                    tabKeyActive.current.push(item);
                }
            });
            return tabKey;
        });
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('home-container')}>
                <HomePageSearch />
                <div className={cx('home-content')}>
                    <Tabs
                        // transition
                        defaultActiveKey={tab}
                        id="controlled-tab-example"
                        className={`${cx('tabs-custom')}  mb-3`}
                        fill
                        onSelect={handleSelectTab}
                    >
                        {navTab.map((item, key) => {
                            return (
                                <Tab
                                    key={key}
                                    eventKey={item.Key}
                                    title={item.Value}
                                    ref={tabKeyActive}
                                    tabClassName={cx('tab-item')}
                                >
                                    {console.log(key)}
                                    <Product productId={item.Key} />
                                </Tab>
                            );
                        })}
                    </Tabs>
                    {/* <NavTab /> */}
                </div>
            </div>
        </div>
    );
}

export default Home;
