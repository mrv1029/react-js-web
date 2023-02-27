import className from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './HomePageSearch.module.scss';
const cx = className.bind(styles);
const searchSuggest = ['ant-man', ' care&share', ' oversize', 'cm24', 'combo'];
function HomePageSearch() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('home-search-container')}>
                <div className={cx('search-header')}>Bạn tìm gì hôm nay?</div>
                <div className={cx('search-container')}>
                    <div className={cx('search')}>
                        <input placeholder='Hãy thử bắt đầu với "Quần đen" xem sao' className={cx('search-control')} />
                    </div>
                    <div className={cx('search-content')}>
                        <div className={cx('text-description')}>
                            <p>Hãy thử tìm bất kỳ từ khoá nào nhé. Coolmate gợi ý nè:</p>
                        </div>
                        <div className={cx('search-suggest-button')}>
                            {searchSuggest.map((item, index) => (
                                <Link to="#" className={cx('search-button')} key={index}>
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePageSearch;
