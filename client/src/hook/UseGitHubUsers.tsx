import { useState, useEffect } from 'react';
import GitHubUser from '../interface/GitHubUser';


interface UseGitHubUsersResult {
  users: GitHubUser[];
  hasMore: boolean;
  fetchAndSetData: (pageNumber: number, query: string) => Promise<void>;
  page: number;
  resetUsers: () => void;
  loading: boolean;
}


const useGitHubUsers = (): UseGitHubUsersResult => {
  const [users, setUsers] = useState<GitHubUser[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (pageNumber: number, query: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/users?q=${query}&page=${pageNumber}`);
      const data = await response.json();
      return data;

    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
    finally {
      {
        setLoading(false);
      }
    }
  }



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
