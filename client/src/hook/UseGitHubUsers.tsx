import { useState, useEffect } from 'react';

interface GitHubUser {
  id: number;
  login: string;
  avatar_url: string;
}

interface UseGitHubUsersResult {
  users: GitHubUser[];
  hasMore: boolean;
  fetchAndSetData: (pageNumber: number, query: string) => Promise<void>;
  page: number;
  resetUsers: () => void;
  loading: boolean;
}

const apiUrl = process.env.REACT_APP_GITHUB_API_URL;

const useGitHubUsers = (): UseGitHubUsersResult => {
  const [users, setUsers] = useState<GitHubUser[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (pageNumber: number, query: string ) =>{
    setLoading(true);
    try {
      let response;
      if (query === '') {
        response = await fetch(`${apiUrl}/users?per_page=12&since=${pageNumber * 13}`);
      } else {
        response = await fetch(`${apiUrl}/search/users?q=${query}&per_page=10&page=${pageNumber}`);
      }
  
      const data = await response.json();
      return query === '' ? data : data?.items || [];
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    } finally {
      setLoading(false);
    }
  };



  const fetchAndSetData = async (pageNumber: number, query: string): Promise<void> => {
    try {
      const data = await fetchData(pageNumber, query);
      if (Array.isArray(data)) {
        data.length > 5 ? setHasMore(true) : setHasMore(false);
        setUsers((prevUsers) => [...prevUsers, ...data]);
        setPage(page + 1);
      } else {
        setHasMore(false)
        console.error('Invalid data structure:', data);
      }
    } catch (error) {
      setHasMore(false)
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };


  const resetUsers = () => {
    setUsers([]);
    setPage(1);
  };

  return {
    users,
    hasMore,
    fetchAndSetData,
    page,
    resetUsers,
    loading
  };
};

export default useGitHubUsers;
