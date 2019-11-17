import React from 'react';
import App from './App';

const SearchArea = (props) => {
    return (
        <div className='search-area'>
            <form action="">
                <input onChange={props.handleSearch} type="text" />
                <button type="submit">Search</button>
            </form>

        </div>
    )
}

export default SearchArea;