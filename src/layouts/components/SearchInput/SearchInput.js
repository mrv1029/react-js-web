import className from 'classnames/bind';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './SearchInput.module.scss';
import { SearchIcon } from '~/components/Icons';
import Popup from '~/components/Popup';
import { SearchResultData } from '~/mock/SearchResultsData.js';
import SearchResults from '../SearchResults';

const cx = className.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const handleHideResult = () => {
        setShowResult(false);
    };
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };
    useEffect(() => {
        // setLoading(true);
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        setSearchResult(SearchResultData);
        // const fetchApi = async () => {
        //     setLoading(true);

        //     const result = await searchServices.search(debouncedValue);

        //     setSearchResult(result);
        //     setLoading(false);
        // };

        // fetchApi();
    }, [searchValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };
    return (
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <Popup>
                            <h4 className={cx('search-title')}>Search</h4>
                            {searchResult.map((result) => (
                                <SearchResults key={result.id} data={result} />
                                // <SearchResults key={result.id} data={result} />
                            ))}
                        </Popup>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        placeholder="Search products"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
