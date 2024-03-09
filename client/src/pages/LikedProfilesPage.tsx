import React from 'react';
import UserList from '../component/UserList';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useLikedProfiles from '../hook/useLikedProfiles';

interface LikedProfilesPageProps {}

const LikedProfilesPage: React.FC<LikedProfilesPageProps> = () => {
  const { likedProfiles, currentPage, totalPages, setCurrentPage, fetchLikedProfiles } = useLikedProfiles({
    apiUrl: `${process.env.REACT_APP_API_URL}/api/users/likedProfiles`,
  });

  const handlePageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div style={{ display: 'flex', flex: 'wrap', width: '60%', marginLeft: '20%', alignItems: 'center', flexDirection: 'column' }}>
      <h1>Liked Profiles</h1>
      <UserList users={likedProfiles} />

      <Stack spacing={2} style={{ marginTop: '20px', justifyContent: 'center' }}>
        <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} variant="outlined" shape="rounded" />
      </Stack>
    </div>
  );
};

export default LikedProfilesPage;
