import { useEffect, useState } from 'react';

interface UseLikedProfilesProps {
  apiUrl: string;
}

interface UseLikedProfilesReturn {
  likedProfiles: any[]; 
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  fetchLikedProfiles: (page: number) => Promise<void>;
}

const useLikedProfiles = ({ apiUrl }: UseLikedProfilesProps): UseLikedProfilesReturn => {
  const [likedProfiles, setLikedProfiles] = useState<any[]>([]); 
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchLikedProfiles = async (page: number) => {
    try {
      const response = await fetch(`${apiUrl}?page=${page}`, {
        method: 'GET',
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        setLikedProfiles(data.likedProfiles);
        setTotalPages(Math.ceil(data.totalProfiles / 10)); // Assuming pageSize is 10
      } else {
        console.error('Error fetching liked profiles:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching liked profiles:', error);
    }
  };

  useEffect(() => {
    fetchLikedProfiles(currentPage);
  }, [currentPage]);

  return { likedProfiles, currentPage, totalPages, setCurrentPage, fetchLikedProfiles };
};

export default useLikedProfiles;
