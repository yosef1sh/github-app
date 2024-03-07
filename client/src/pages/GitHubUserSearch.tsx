import React, { useState, useEffect, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import _debounce from 'lodash/debounce';
import useGitHubUsers from '../hook/UseGitHubUsers';
import UserList from '../component/UserList';
import SearchAppBar from '../component/SearchAppBar';
import LoaderComponent from '../component/Loader';

function GitHubUserSearch() {
    const { users, hasMore, fetchAndSetData, page, resetUsers,loading } = useGitHubUsers();
    const [query, setQuery] = useState('a');

    const debouncedFetchData = _debounce((pageNumber, query) => fetchAndSetData(pageNumber, query), 500);

    useEffect(() => {
        resetUsers();
        debouncedFetchData(1, query);
        return debouncedFetchData.cancel;
    }, [query]);

    const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }

    return (
        <div>
            <SearchAppBar value={query} handleOnInputChange={handleOnInputChange} />
            <InfiniteScroll
                dataLength={users.length}
                next={() => fetchAndSetData(page, query)}
                hasMore={hasMore}
                loader={<LoaderComponent loading={loading} />}>
                <div style={{ display: 'flex', flex: 'wrap' ,width: '60%', marginLeft: '20%' }}>
                    <UserList users={users} />
                </div>
            </InfiniteScroll>
        </div>
    );
}

export default GitHubUserSearch;
