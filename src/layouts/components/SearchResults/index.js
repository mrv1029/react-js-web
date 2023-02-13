import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './SearchResults.module.scss';

const cx = classNames.bind(styles);

function SearchResults({ data }) {
    return (
        // <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
        <Link to="#" className={cx('wrapper')}>
            {/* <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} /> */}
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.first_name + data.last_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

SearchResults.propTypes = {
    data: PropTypes.object.isRequired,
};

export default SearchResults;
